<script lang="ts">
	import LinkButton from './LinkButton.svelte';
	import type { SiteLink } from '$lib/data/site';

	// `links` is an array of { title, url } from the data file.
	let { links }: { links: SiteLink[] } = $props();
</script>

<div class="grid">
	{#each links as link}
		<LinkButton title={link.title} url={link.url} highlight={link.highlight} />
	{/each}
</div>

<style>
	/* Layout only (no decoration): a single centered column of buttons. */
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.2rem;
		justify-items: center;
		width: 80%;
	}
</style>
