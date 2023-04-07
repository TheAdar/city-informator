<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;

	// for checks
	let value = '';
</script>

<!-- TODO: slide animation to the search form -->
<div class={`m-auto max-w-md ${value ? '' : 'flex flex-col justify-center h-full'}`}>
	{#if !value}
		<h1 class="mb-3">City Informator</h1>
	{/if}
	<form method="POST" class={`flex ${value && 'p-4'}`} action="?/search" use:enhance>
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

{#if form?.cities && value}
	<div class="m-auto max-w-3xl px-4">
		{#if form.cities.length >= 1}
			<h2 class="mb-5">Cities</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{#each form?.cities as city}
					<a
						href={`/details/${city.lat}*${city.lon}`}
						class="w-full h-40 bg-zinc-900 rounded-xl flex items-center justify-center transition ease-out text-lg font-semibold hover:-translate-y-2 hover:bg-zinc-800 focus:ring-2 focus:ring-blue-500 outline-none"
					>
						{city.name}
						{city.country}
					</a>
				{/each}
			</div>
		{:else}
			<span>No city found</span>
		{/if}
	</div>
{/if}
