<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h3>Cities</h3>
{#each data.cities as city}
	<button on:click={() => {goto(`/${city.lat}*${city.lon}`)}}>{city.name} ({city.country})</button>
{/each}
