<script lang="ts">
	// The logo is plain text supplied from the data file.
	let { text }: { text: string } = $props();
</script>

<h1 class="m-0 text-center text-6xl leading-logo font-display text-red-text text-glow">{text}</h1>
