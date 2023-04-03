<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;
	let query = '';

	function onSubmit(
		e: Event & {
			readonly submitter: HTMLElement | null;
		} & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) {
		e.preventDefault();
		goto('/search?q=' + query.toLocaleLowerCase());
	}
</script>

<form on:submit={(e) => onSubmit(e)}>
	<input bind:value={query} type="text" placeholder="Search for a city" />

	<button disabled={!query} type="submit">Search</button>
</form>

{#if data.cities.length > 0}
	<h3>Cities</h3>
	{#each data.cities as city}
		<button
			on:click={() => {
				goto(`/${city.lat}*${city.lon}`);
			}}>{city.name} ({city.country})</button
		>
	{/each}
{:else}
	<span>No city found</span>
{/if}
