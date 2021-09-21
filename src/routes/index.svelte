<script>
	import Rule from './_inc/_rule.svelte'
	import { toClipboard } from 'copee';	
	import { onMount } from 'svelte'
	import FormInput from './_inc/_input.svelte'

	// export let metatags = {}
	let metatags = {}
	let mt = {}
	let url = ''
	let promiseMetatags = null

	async function getMetatag() {
		if (!url) return []
		const res = await fetch(`/validate/${url.replace(/^https?:\/\//,'')}`)
		if (!res.ok) return null
		return await res.json()
	}

	async function handleSubmit() {
		promiseMetatags = getMetatag()
	}

</script>

<div class="w-1/2 mx-auto text-lg">
	<div class="py-32">
		<h1 class="text-6xl font-extrabold text-center mb-6 leading-none">
			<span class="text-lime-500">Free Audit SEO </span> <br>of your web page
		</h1>
		<p></p>
		<form on:submit|preventDefault={handleSubmit} class="sticky top-0 py-2 bg-trueGray-50">
			<input 
				bind:value={url}
				placeholder="Website URL"
				class="text-gray-800 px-4 py-3 font-semibold hover:outline-none w-full disabled:text-gray-400 border" 
			/>		
			<!-- <FormInput bind:value={url} label="URL" /> -->
		</form>
		{#await promiseMetatags }
		<div class="my-12 ">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-trueGray-400 animate-spin mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>		
		</div>
		{:then metatags}
		{#if !!metatags}
			<div class="my-12 divide-y-2 bg-white border">
				{#each metatags as {title, ref, rules}, index}
				<div class="divide-y">
					{#if title}
						<div class="px-4 py-3 font-semibold">
							{title}
							{#if ref}
								<a href="{ref}" class="font-normal text-blue-400 align-top text-sm" target="_blank" rel="noopener nofollower ">[?]</a>
							{/if}							
						</div>
					{/if}
					{#each rules as rule, index}
						<Rule tag={rule} />			
					{/each}
				</div>
				{/each}
			</div>
		{/if}
		{/await}
	</div>

	
</div>

