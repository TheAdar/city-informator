<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;

	// for checks
	let value = '';
	let isSearching = false;

	function onSubmit() {
		if (!isSearching) isSearching = true;
	}
</script>

<!-- TODO: slide animation to the search form -->
<div class={`m-auto max-w-md ${isSearching ? '' : 'flex flex-col justify-center h-full'}`}>
	{#if !isSearching}
		<h1 class="mb-3">City Informator</h1>
	{/if}
	<form
		method="POST"
		on:submit|preventDefault={() => onSubmit()}
		class={`flex ${isSearching && 'p-4'}`}
		action="?/search"
		use:enhance
	>
		<!-- svelte-ignore a11y-autofocus -->
		<input
			name="search-query"
			class="bg-zinc-900 border-zinc-800 placeholder:text-zinc-500"
			bind:value
			autofocus
			type="search"
			placeholder="Search a city"
		/>
		<button
			class="bg-zinc-900 ml-2 rounded-lg disabled:opacity-50 focus:ring-2 focus:ring-blue-500"
			disabled={!value}
			type="submit">Search</button
		>
	</form>
</div>

{#if form?.cities && isSearching}
	<div class="m-auto max-w-3xl px-4">
		{#if form.cities.length >= 1}
			<h2 class="mb-5">Cities</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{#each form?.cities as city}
					<a
						href={`/details/${city.lat}*${city.lon}`}
						class="p-4 w-full h-40 bg-zinc-900 rounded-xl transition ease-out text-lg font-semibold hover:-translate-y-2 hover:bg-zinc-800 focus:ring-2 focus:ring-blue-500 outline-none active:scale-110"
					>
						<span>
							City: {city.name}
						</span>
						<br />
						<span>
							<!-- https://www.iban.com/country-codes -->
							Country: {city.country}
						</span>
						{#if city.state}
							<br />
							<span>
								State: {city.state}
							</span>
						{/if}
					</a>
				{/each}
			</div>
		{:else}
			<p class="bg-red-500 rounded-lg h-8 flex items-center px-4 text-black text-lg font-semibold">Ooops, no city found :/</p>
		{/if}
	</div>
{/if}
