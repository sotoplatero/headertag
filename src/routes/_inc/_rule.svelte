<script>
	import CheckIcon from '$lib/checkicon.svelte'
	export let tag = {}
	// $: console.log(tag)
	$: rules = tag.rules || []
</script>
<div class="rule">
	<div class="rule-title col-span-2">
		<CheckIcon valid={!!tag.value } />
		<div class="title">
			{tag.name}
			{#if tag.ref}
				<a href="{tag.ref}" class="font-normal text-blue-400 align-top text-sm" target="_blank" rel="noopener nofollower ">[?]</a>
			{/if}
		</div>
	</div>
	<div class="col-span-3 text-sm">
		<div class="line-clamp-2 font-semibold">
			{tag.value}
		</div>
		<div class="space-y-2 mt-4">
			<div>{tag.info}</div>
			{#each rules as rule, index}
				<div class="rule-title">
					<CheckIcon valid={!!rule.value} size="4"/>
					<div>{rule.name}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.rule {
		@apply grid grid-cols-5 gap-2 items-start px-4 py-3;
	}
	.rule-title{ @apply  flex items-center;}
	.title { @apply font-semibold; }
</style>