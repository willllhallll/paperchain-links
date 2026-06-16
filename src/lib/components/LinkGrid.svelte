<script lang="ts">
	import LinkButton from './LinkButton.svelte';
	import type { SiteLink } from '$lib/data/site';

	// `links` is an array of { title, url } from the data file.
	let { links }: { links: SiteLink[] } = $props();
</script>

<!-- Layout only: a single centered column of buttons. -->
<div class="grid w-4/5 grid-cols-1 justify-items-center gap-5">
	{#each links as link}
		<LinkButton title={link.title} url={link.url} highlight={link.highlight} />
	{/each}
</div>
