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
		goto('/?q=' + query.toLocaleLowerCase());
	}
</script>

<div class="search-form-container">
	<form class="search-form" on:submit={(e) => onSubmit(e)}>
		<input class="search-input" bind:value={query} type="text" placeholder="Search a city" />
		<button class="search-button" disabled={!query} type="submit">Search</button>
	</form>
</div>

{#if data.cities}
	{#if data.cities.length > 0}
		<h3>Cities</h3>
		{#each data.cities as city}
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

<style scoped>
	.search-form-container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}

	.search-form {
		display: flex;
		width: 400px;
		max-width: 400px;
	}

	.search-input {
		width: 100%;
		border: 2px solid transparent;
		outline: 0;
		border-radius: 5px;
		height: 35px;
		background: #4444;
		color: #999;
		transition: border 150ms ease;
	}

	.search-input:focus {
		border: 2px solid #555;
	}

	.search-button {
		cursor: pointer;
		margin-left: 10px;
		border: 2px solid transparent;
		outline: 0;
		border-radius: 5px;
		background: #4444;
		color: #888;
		font-weight: 500;
		font-size: 1.1rem;
		transition: border 150ms ease;
		padding: 5px 20px;
	}

	.search-button:disabled {
		cursor: not-allowed;
	}

	.search-button:focus {
		border: 2px solid #555;
	}
</style>
