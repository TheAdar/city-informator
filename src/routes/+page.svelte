<script lang="ts">
	import { goto } from '$app/navigation';

	let query = '';
</script>

<input bind:value={query} type="text" placeholder="Search for a city" />

<button
	on:click={() => {
		goto('/search?q=' + query);
	}}>Search</button
>
