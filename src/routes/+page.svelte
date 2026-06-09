<script lang="ts">
	import siteData from '$lib/data/site.json';
	import type { SiteData } from '$lib/data/site';
	import Logo from '$lib/components/Logo.svelte';
	import LinkGrid from '$lib/components/LinkGrid.svelte';
	import Container from '$lib/components/Container.svelte';

	const site = siteData as SiteData;
</script>

<main>
	<Container>
		<Logo text={site.logo} />
		<LinkGrid links={site.links} />
	</Container>
</main>

<style>
	/* Reset default margins so the page background reaches every edge. */
	:global(html, body) {
		margin: 0;
	}

	/* Full-page vertical stripes from a single repeating gradient (placeholder white/grey). */
	:global(body) {
		min-height: 100dvh;
		background: repeating-linear-gradient(
			to right,
			hsl(var(--red-h) var(--red-s) var(--l-bold)) 0,
			hsl(var(--red-h) var(--red-s) var(--l-bold)) 40px,
			hsl(var(--pink-h) var(--pink-s) var(--l-soft)) 40px,
			hsl(var(--pink-h) var(--pink-s) var(--l-soft)) 80px
		);
	}

	/* Layout only: center the logo + grid stack in the live viewport.
	   100dvh tracks the actual viewport height, so the stack re-centers when the
	   viewport resizes after first render (e.g. mobile bottom bar collapsing). */
	main {
		min-height: 100dvh;
		display: grid;
		align-content: center;
		justify-items: center;
	}
</style>
