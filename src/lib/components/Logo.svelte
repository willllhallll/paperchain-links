<script lang="ts">
	// The logo is plain text supplied from the data file.
	let { text }: { text: string } = $props();
</script>

<h1>{text}</h1>

<style>
	/* Keep wrapped logo lines centered rather than aligned to the start. */
	h1 {
		text-align: center;
		margin: 0;
		font-size: 3.8rem;
		line-height: 0.9;
		font-family: More Sugar, serif;
		letter-spacing: 0rem;
		color: hsl(var(--red-h) var(--red-s) var(--l-text));
		filter:
		drop-shadow(
    		0px 0px 2px hsl(var(--red-h) var(--red-s) var(--l-faint) / 1)
  		)
		drop-shadow(
    		0px 0px 5px hsl(var(--red-h) var(--red-s) var(--l-tint) / 1)
  		)
		drop-shadow(
    		0px 0px 10px hsl(var(--red-h) var(--red-s) var(--l-soft) / 1)
  		)
	}
</style>
