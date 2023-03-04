<script lang="ts">
	import { onMount } from 'svelte';
	import { adjustFinalDarkLight, currentDarklight, toggleBackUserDarkLight, userDarkLight } from './darklight';
	// Types
	import type { CssClasses } from '@skeletonlabs/skeleton';
	type OnKeyDownEvent = KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement };

	// Props
	/** Provide classes to set width styles. */
	export let width: CssClasses = 'w-12';
	/** Provide classes to set height styles.. */
	export let height: CssClasses = 'w-12';

	// Classes
	const cTransition = `transition-all duration-[200ms]`;
	const cTrack = 'cursor-pointer';

	onMount(async () => {
		if (window) {
			window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
				const colorScheme = e.matches ? 'dark' : 'light';
				console.log(colorScheme);

				adjustFinalDarkLight();
			});
		}
		adjustFinalDarkLight();
	});

	function onToggleHandler(): void {
		$userDarkLight = toggleBackUserDarkLight();
		$currentDarklight = adjustFinalDarkLight();
	}
	// A11y Input Handlers
	function onKeyDown(event: OnKeyDownEvent): void {
		// Enter/Space triggers selecton event
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			event.currentTarget.click();
		}
	}

	// Reactive
	$: classesTrack = `${cTrack} ${cTransition} ${width} ${height} ${$$props.class ?? ''}`;
</script>

<div
	class={classesTrack}
	on:click={onToggleHandler}
	on:click
	on:keydown={onKeyDown}
	on:keydown
	on:keyup
	on:keypress
	role="button"
	aria-label="Dark Mode Button"
	aria-current={$currentDarklight}
	title="Toggle {$userDarkLight == 2 ? 'Use OS' : $userDarkLight == 1 ? 'Light' : 'Dark'} Mode"
	tabindex="0">
	{#if $userDarkLight == 0}
		<slot name="dark">Missing dark icon</slot>
	{:else if $userDarkLight == 1}
		<slot name="light">Missing light icon</slot>
	{:else if $userDarkLight == 2}
		<slot name="os">Missing OS icon</slot>
	{/if}
</div>
