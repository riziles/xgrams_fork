<script lang="ts">
	import { LanguageNames, myStore } from '$lib/store/data';
	import { modalStore, SlideToggle } from '@skeletonlabs/skeleton';

	const { data } = myStore;

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// Handle Form Submission
	function onFormSubmit(): void {
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
</script>

<div class="modal-example-form {cBase}">
	<header class={cHeader}>Code</header>
	<article>{$modalStore[0]?.body ?? '(body missing)'}</article>
	{#each LanguageNames as name, i}
		<div>
			<SlideToggle {name} label={name} bind:checked={$data.languages[i]}>{name}</SlideToggle>
		</div>
	{/each}
	<footer class="modal-footer {parent.regionFooter}">
		<button class="btn {parent.buttonPositive}" on:click={onFormSubmit}><slot /></button>
	</footer>
</div>
