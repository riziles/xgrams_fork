// Lightswitch Service
import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';
import { get } from 'svelte/store';
import type { DarkLightWindow } from './darklight.window';
import { Trinary } from './trinary';
import { TrinaryValue } from './trinary.d';

// Stores ---
// true: light, false: dark, neither: use OS value

// Save user setting to window for access by osDarkLightWatcher
declare let window: DarkLightWindow;

/** Store: User Preference Mode */
export const darklightUser: Writable<Trinary> = localStorageStore<Trinary>(
	'darklightUser',
	new Trinary(TrinaryValue.neither)
);

/** Store: Current Mode State */
export const currentDarklight = localStorageStore<boolean>('currentDarklight', false);

// Get ---

/** Get the OS Preference for light/dark mode */
function getModeOsPrefers(): boolean {
	const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
	return prefersLightMode;
}

/** Get the User for light/dark mode */
function getModeUserPrefers(): Trinary {
	return get(darklightUser);
}

/** Get the dark light mode */
export function getDarkLightMode(): boolean {
	let user = getModeUserPrefers();
	let modeValue;
	switch (user.value) {
		case TrinaryValue.neither:
			let os = getModeOsPrefers();
			modeValue = os;
			// console.log('getDarkLightMode() modeValue os:' + modeValue);
			break;
		case TrinaryValue.true:
			modeValue = true;
			// console.log('getDarkLightMode() modeValue light:' + modeValue);
			break;
		default:
			// console.log('getDarkLightMode() modeValue dark:' + modeValue);
			modeValue = false;
			break;
	}
	return modeValue;
}

// Set ---
/** Set the User Preference for light/dark mode */
export function setUserDarkLight(value: TrinaryValue): void {
	get(darklightUser).value = value;
	window.userDarkLight = value;
}

/** Set the the current light/dark mode */
export function setDarkLightCurrent(value: boolean) {
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
	// console.log('\nprefersDarkOS:' + osPrefersDark);
	if ('darklightUser' in localStorage) {
		if (Number(localStorage.getItem('darklightUser')) == 1) {
			//TrinaryValue.true
			window.userDarkLight = 1;
			elemHtmlClasses.remove('dark');
			return;
		} else if (Number(localStorage.getItem('darklightUser')) == 0) {
			//TrinaryValue.false
			window.userDarkLight = 0;
			elemHtmlClasses.add('dark');
			return;
		}
	}
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
		// console.log('osDarkLightWatcher value:' + value);
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
