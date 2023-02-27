<script lang="ts">
	import {
		LanguageIndex,
		LanguageNames,
		myStore,
		OptionIndex,
		ScopeNames,
		ScopeValues,
		SoundIndex,
		SoundNames,
		SourceNames
	} from '$lib/store/data';
	import type { ModalComponent, ModalSettings, PopupSettings } from '@skeletonlabs/skeleton';
	import { modalStore, popup, RadioGroup, RadioItem, SlideToggle } from '@skeletonlabs/skeleton';
	import Counter from './Counter.svelte';
	import OptionsFilter from './OptionsFilter.svelte';

	const { data, settings, sources } = myStore;

	function modalComponentList(): void {
		const d: ModalSettings = {
			type: 'component',
			component: 'OptionsFilter',
			title: 'Custom List Component',
			body: 'Make your selection then press submit.',
			response: (r: any) => {
				if (r) console.log('response:', r);
			}
		};
		modalStore.trigger(d);
	}

	let exampleSettings: PopupSettings = {
		// Set the event as: click | hover | hover-click
		event: 'click',
		// Provide a matching 'data-popup' value.
		target: 'examplePopup'
	};

	function updateCodeWords(status: string) {
		// console.log('updateCodeWords:' + status);
		if (status == 'Closing') {
			let codeWordsProccessed = [
				...($data.languages[LanguageIndex.languageCpp] ? $sources.code.languageCpp : []),
				...($data.languages[LanguageIndex.languageCs] ? $sources.code.languageCs : []),
				...($data.languages[LanguageIndex.languageGo] ? $sources.code.languageGo : []),
				...($data.languages[LanguageIndex.languageJava] ? $sources.code.languageJava : []),
				...($data.languages[LanguageIndex.languageJavascript]
					? $sources.code.languageJavascript
					: []),
				...($data.languages[LanguageIndex.languagePython] ? $sources.code.languagePython : []),
				...($data.languages[LanguageIndex.languageRust] ? $sources.code.languageRust : []),
				...($data.languages[LanguageIndex.languageSwift] ? $sources.code.languageSwift : []),
				...($data.languages[LanguageIndex.languageTypescript]
					? $sources.code.languageTypescript
					: [])
			];

			$sources.source[OptionIndex.code_words] = codeWordsProccessed;
			$sources = $sources;
			$data = $data;
		}
	}
	let status = 'Closed';
	$: updateCodeWords(status);

	let isOpenCode = false;
	const toggleCode = () => (isOpenCode = !isOpenCode);
	let isOpenCustom = false;
	const toggleCustom = () => (isOpenCustom = !isOpenCustom);
</script>

<button class="btn variant-filled" on:click={modalComponentList}>modalComponentList</button>
<button class="btn variant-filled" use:popup={exampleSettings}>popup</button>
<!-- <pre>queue: {JSON.stringify($modalStore, null, 2)}</pre> -->
<div class="card variant-filled-secondary p-4" data-popup="examplePopup">
	Popup text.
	<!-- Append the arrow element -->
	<div class="arrow variant-filled-secondary" />
</div>

<section class="grid grid-cols-1 sm:grid-cols-5 gap-1">
	<div class="card p-4 space-y-4">
		<header class="card-header">Source</header>
		<div class="p-4">
			<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
				<ul class="list">
					{#each SourceNames as name, i}
						<li>
							<RadioItem bind:group={$data.source} label={name} {name} value={i}>{name}</RadioItem>
						</li>
					{/each}

					<RadioItem bind:group={$data.source} name="Code" value={OptionIndex.code_words}
						>Code
						<!-- <ListGroupItem
						active={$data.source === OptionIndex.code_words}
						on:click={() => ($data.source = OptionIndex.code_words)}
						>-->
						<button class="btn" on:click={toggleCode}>⚙️</button>
					</RadioItem>
					<RadioItem bind:group={$data.source} name="Custom" value={OptionIndex.custom_words}
						>Custom
						<button class="btn" on:click={toggleCustom}>⚙️</button>
						<!-- <Modal body header="Custom Words" isOpen={isOpenCustom} toggle={toggleCustom} size="xl">
							<Label for="exampleText">Add custom words, separated by spaces/newlines:</Label>
							<Input
								bind:value={$data.currentOptions.phrases}
								type="textarea"
								name="text"
								id="exampleText"
							/>
						</Modal> -->
					</RadioItem>
				</ul>
			</RadioGroup>
		</div>
	</div>
	<div class="card p-4 space-y-4">
		<header class="card-header">Scope</header>
		<div class="p-4">
			<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
				<ul class="list">
					{#each ScopeNames as name, i}
						<li>
							<RadioItem bind:group={$data.currentOptions.scope} {name} value={ScopeValues[i]}
								>{name}</RadioItem
							>
						</li>
					{/each}
				</ul>
			</RadioGroup>
		</div>
	</div>
	<div class="card p-4 space-y-4">
		<header class="card-header">Generate</header>
		<div class="p-4">
			<Counter name="Combination" bind:count={$data.currentOptions.combination} />
			<Counter name="Repetition" bind:count={$data.currentOptions.repetition} />
			<label class="label">
				<span>Filter</span>
				<textarea class="textarea" bind:value={$data.currentOptions.filter} name="filter text" />
			</label>
			<!-- <div id="filter-togglers" class="collapse pr-4">
				<div>
					All letters on same line required. At least one line must match:
					<div class="sample-text">exa<br />mple</div>
					Matches: exam empl mple plem
				</div>
			</div> -->
		</div>
	</div>
	<div class="card p-4 space-y-4">
		<header class="card-header">Goals</header>
		<div class="p-4">
			<Counter name="Minimum&nbsp;WPM" max={401} step={10} bind:count={$settings.minimumWPM} />
			<Counter name="Minimum&nbsp;Accuracy" bind:count={$settings.minimumAccuracy} />
		</div>
	</div>
	<div class="card p-4 space-y-4">
		<header class="card-header">Sounds</header>
		<div class="p-4">
			<div>
				{#each SoundNames as name, i}
					<SlideToggle {name} bind:checked={$settings
					
					
					
					
					
					
					
					
					.sounds[i]}>{name}</SlideToggle>
				{/each}
			</div>
		</div>
	</div>
</section>
