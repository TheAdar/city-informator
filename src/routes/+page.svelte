<script lang="ts">
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';

	export let form;

	// for checks
	let query = '';
</script>

<!-- TODO: slide animation to the search form -->
<div class={`m-auto max-w-md ${query ? '' : 'flex flex-col justify-center h-full'}`}>
	{#if !query}
		<h1 class="mb-3">City Informator</h1>
	{/if}
	<form method="POST" class={`flex ${query && 'p-4'}`} use:enhance>
		<input
			name="search-query"
			class="bg-zinc-900 border-zinc-800 placeholder:text-zinc-500"
			bind:value={query}
			type="search"
			placeholder="Search a city"
		/>
		<button
			class="bg-zinc-900 ml-2 rounded-lg disabled:opacity-50 focus:ring-2 focus:ring-blue-500"
			disabled={!query}
			type="submit">Search</button
		>
	</form>
</div>

{#if form?.cities && query}
	{#if form.cities.length >= 1}
		<h2>Cities</h2>
		{#each form?.cities as city}
			<button
				on:click={() => {
					goto(`/details/${city.lat}*${city.lon}`);
				}}>{city.name} ({city.country})</button
			>
		{/each}
	{:else}
		<span>No city found</span>
	{/if}
{/if}
