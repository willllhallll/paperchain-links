<script lang="ts">
	import type { SiteLink } from '$lib/data/site';

	// One clickable link "button". Rendered as an anchor so it's a real link.
	// `highlight` (from the JSON) overlays the `.special` style rules below.
	let { title, url, highlight = false }: SiteLink = $props();
</script>

<a href={url}>
	{title}
	{#if highlight}<div class="exclaim">{highlight}</div>{/if}
</a>


<style>
	/* Keep wrapped logo lines centered rather than aligned to the start. */
	a {
		text-align: center;
		margin: 0;
		font-size: 1rem;
		text-transform: uppercase;
		font-family: More Sugar, serif;
		text-decoration: none;
		color: hsl(var(--red-h) var(--red-s) var(--l-text));
		border: 0.1rem solid hsl(var(--red-h) var(--red-s) var(--l-faint));
		width: 100%;
		padding: 1rem 0rem;
		border-radius: 0.6rem;
		background: hsl(var(--pink-h) var(--pink-s) var(--l-tint) / 0.8);
		backdrop-filter: blur(6px);
	}

	a:hover {
		background: hsl(var(--pink-h) var(--pink-s) var(--l-tint) / 1);
	}


	.exclaim {
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(50%, -40%);
		font-size: 1.5rem;
		color: hsl(var(--red-h) var(--red-s) var(--l-dull));
	}

</style>
