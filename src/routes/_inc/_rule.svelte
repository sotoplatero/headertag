<script>
	import CheckIcon from '$lib/checkicon.svelte'
	export let tag = {}
	// $: console.log(tag)
	function validateRules() {
		const counterTrues = tag.rules.reduce( (acc,curr) => (acc + !!curr.value), 0 )
		if (counterTrues > 0 && counterTrues < tag.rules.length) return -1
		return ( counterTrues === tag.rules.length ) ? 1 : 0
	}

	$: rules = tag.rules || []
	$: valid = Array.isArray(tag.rules) 
		? validateRules()
		: (!!tag.value ? 1 : 0)

</script>
<div class="rule">
	<div class="rule-title col-span-2">
		<CheckIcon {valid} />
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
			{#each rules as {name,value}, index}
				<div class="rule-title">
					<CheckIcon valid={!!value} size="4"/>
					<div>{name}</div>
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