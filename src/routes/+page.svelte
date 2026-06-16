<script lang="ts">
	import siteData from '$lib/data/site.json';
	import type { SiteData } from '$lib/data/site';
	import Logo from '$lib/components/Logo.svelte';
	import LinkGrid from '$lib/components/LinkGrid.svelte';
	import Container from '$lib/components/Container.svelte';

	const site = siteData as SiteData;
</script>

<!-- 100dvh tracks the live viewport so the stack re-centers on resize (e.g. mobile bars). -->
<main class="grid min-h-dvh content-center justify-items-center bg-stripes">
	<Container>
		<Logo text={site.logo} />
		<LinkGrid links={site.links} />
	</Container>
</main>
