<script lang="ts">
	import type { Snippet } from 'svelte';

	// Wraps the main bulk of the page in a fixed-width, horizontally centered column.
	// Header/footer content can sit outside this component to escape the 300px width.
	let { children }: { children?: Snippet } = $props();
</script>

<!-- A fixed-width (~22rem), horizontally centered column for the primary content. -->
<div class="grid w-88 max-w-full justify-items-center gap-6 py-6 rounded-xl">
	{@render children?.()}
</div>
