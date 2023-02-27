<script lang="ts">
	import { LanguageNames, myStore } from '$lib/store/data';

	import { SlideToggle } from '@skeletonlabs/skeleton';
	const { data } = myStore;
</script>

<div class="p-4">
	<div>
		{#each LanguageNames as name, i}
			<SlideToggle {name} label={name} bind:checked={$data.languages[i]}>{name}</SlideToggle>
		{/each}
	</div>
</div>

<!-- <Modal body header="Custom Words" isOpen={isOpenCustom} toggle={toggleCustom} size="xl">
							<Label for="exampleText">Add custom words, separated by spaces/newlines:</Label>
							<Input
								bind:value={$data.currentOptions.phrases}
								type="textarea"
								name="text"
								id="exampleText"
							/>
						</Modal> -->
