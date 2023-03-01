// DarkLight Service
import { browser } from '$app/environment';
import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';
import { get } from 'svelte/store';
import type { DarkLightWindow } from './darklight.window';
import { TrinaryValue } from './trinary';

// Save user setting to window for access by osDarkLightWatcher
declare let window: DarkLightWindow;

// Stores ---
// true: light, false: dark, neither: use OS value

/** Store: User Darklight State */
export const userDarkLight = localStorageStore<TrinaryValue>('userDarkLight', TrinaryValue.neither);

/** Store: Current Darklight State */
export const currentDarklight = localStorageStore<boolean>('currentDarklight', false);

// Get ---

/** Get the OS Preference for light/dark mode */
function getOSDarkLight(): boolean {
	const osDarkLight = window.matchMedia('(prefers-color-scheme: light)').matches;
	return osDarkLight;
}

/** Get the User for light/dark mode */
function getUserDarkLight(): TrinaryValue {
	return get(userDarkLight);
}

/** Adjust the final dark light mode from combined user and OS preferences */
export function adjustFinalDarkLight(): boolean {
	let userDarkLight = getUserDarkLight();
	let finalDarkLight;
	switch (userDarkLight) {
		case TrinaryValue.neither:
			let os = getOSDarkLight();
			finalDarkLight = os;
			// console.log('getFinalDarkLight() finalDarkLight os:' + finalDarkLight);
			break;
		case TrinaryValue.true:
			finalDarkLight = true;
			// console.log('getFinalDarkLight() finalDarkLight light:' + finalDarkLight);
			break;
		default:
			// console.log('getFinalDarkLight() finalDarkLight dark:' + finalDarkLight);
			finalDarkLight = false;
			break;
	}
	setCurrentDarkLight(finalDarkLight);
	return finalDarkLight;
}

// Set ---
/** Set the User Preference for light/dark mode */
export function setUserDarkLight(value: TrinaryValue): void {
	userDarkLight.set(value);
	window.userDarkLight = value;
}

/**
 * toggle false -> true -> neither -> false ...
 */
export function toggleForwardUserDarkLight(): TrinaryValue {
	userDarkLight.set(Math.abs((get(userDarkLight) + 1) % 3));
	return get(userDarkLight);
}
/**
 * toggleBack false -> neither -> true -> false ...
 */
export function toggleBackUserDarkLight(): TrinaryValue {
	userDarkLight.set(Math.abs((get(userDarkLight) + 2) % 3));
	return get(userDarkLight);
}

/** Set the the current light/dark mode */
function setCurrentDarkLight(value: boolean) {
	const elemHtmlClasses = document.documentElement.classList;
	const classDark = `dark`;
	value === true ? elemHtmlClasses.remove(classDark) : elemHtmlClasses.add(classDark);
	currentDarklight.set(value);
}

// Lightswitch Utility

/** Set the visible light/dark mode on page load. */
export function initializeDarkLight() {
	const elemHtmlClasses = document.documentElement.classList;
	const osPrefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
	// console.log('\nosPrefersDark:' + osPrefersDark);
	if ('userDarkLight' in localStorage) {
		// let s = localStorage.getItem('userDarkLight') ?? '';
		// let aDarkLight = Number(JSON.parse(s));
		// console.log('aDarkLight:' + aDarkLight);
		if (Number(localStorage.getItem('userDarkLight')) == 1) {
			//TrinaryValue.true
			// console.log('userDarkLight: TrinaryValue.true');
			window.userDarkLight = 1;
			elemHtmlClasses.remove('dark');
			return;
		} else if (Number(localStorage.getItem('userDarkLight')) == 0) {
			//TrinaryValue.false
			// console.log('userDarkLight: TrinaryValue.false');
			window.userDarkLight = 0;
			elemHtmlClasses.add('dark');
			return;
		}
	}
	//TrinaryValue.neither
	// console.log('userDarkLight: TrinaryValue.neither');
	window.userDarkLight = 2;
	if (osPrefersDark) {
		elemHtmlClasses.add('dark');
	} else {
		elemHtmlClasses.remove('dark');
	}
}

// Auto-Switch Utility

/** Update OS dark/light, updates if user setting is OS. */
export function osDarkLightWatcher(): void {
	const mql = window.matchMedia('(prefers-color-scheme: light)');
	function setMode(value: boolean) {
		// TrinaryValue.neither
		if (window.userDarkLight == 2) {
			const elemHtmlClasses = document.documentElement.classList;
			const classDark = `dark`;
			value === true ? elemHtmlClasses.remove(classDark) : elemHtmlClasses.add(classDark);
		}
	}
	setMode(mql.matches);
	mql.onchange = () => {
		setMode(mql.matches);
	};
}
