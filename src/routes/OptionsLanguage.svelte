<!-- <Modal
							body
							header="Languages"
							isOpen={isOpenCode}
							toggle={toggleCode}
							size="sm"
							on:open={() => (status = 'Opened')}
							on:closing={() => (status = 'Closing')}
						>
							<FormGroup>
								{#each LanguageNames as name, i}
									<Input id="ln{i}" type="switch" bind:checked={$data.languages[i]} label={name} />
								{/each}
							</FormGroup>
						</Modal> -->