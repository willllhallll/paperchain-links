<script lang="ts">
	import type { SiteLink } from '$lib/data/site';

	// One clickable link "button". Rendered as an anchor so it's a real link.
	// `highlight` (from the JSON) overlays the `.special` style rules below.
	let { title, url, highlight = false }: SiteLink = $props();
</script>

<a
	href={url}
	class="relative m-0 w-full rounded-lg border border-red-faint bg-pink-tint/80 py-4 text-center text-base uppercase no-underline backdrop-blur-sm font-display text-red-text hover:bg-pink-tint"
>
	{title}
	{#if highlight}
		<div class="absolute right-0 top-0 translate-x-1/2 -translate-y-[40%] text-2xl text-red-dull">
			{highlight}
		</div>
	{/if}
</a>
