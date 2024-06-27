<script lang="ts">
	import Footer from './Footer.svelte';
	import Login from './Login.svelte';
	import Signup from './Signup.svelte';

	let showLogin = true;
	let valueBtn = 'Signup';
	function viewLogin() {
		showLogin = !showLogin;
		valueBtn = showLogin ? 'Signup' : 'Login';
	}
	console.log(valueBtn);
</script>

{#if showLogin}
	<Login />
{:else}
	<Signup />
{/if}

<button on:click={viewLogin}>{valueBtn}</button>

<Footer />
