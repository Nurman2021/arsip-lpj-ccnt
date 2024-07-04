<script>
	import { onMount } from 'svelte';
	import { decodeJwtResponse, onGoogleScriptLoad } from '$lib/auth';
	onMount(() => {
		onGoogleScriptLoad(decodeJwtResponse);
	});
	export let btnClass = '';
</script>

<div id="googleSignIn" class={btnClass}></div>
