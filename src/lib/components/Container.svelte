<script lang="ts">
	import type { Snippet } from 'svelte';

	// Wraps the main bulk of the page in a fixed-width, horizontally centered column.
	// Header/footer content can sit outside this component to escape the 300px width.
	let { children }: { children?: Snippet } = $props();
</script>

<div class="container">
	{@render children?.()}
</div>

<style>
	/* Layout only: a 300px-wide centered column for the primary content. */
	.container {
		width: 350px;
		max-width: 100%;
		display: grid;
		justify-items: center;
		gap: 1.5rem;
		padding: 1.5rem 0rem;
		background: hsl(var(--pink-h) var(--pink-s) var(--l-faint) / 0);
		border-radius: 0.8rem;
		
	}
</style>
