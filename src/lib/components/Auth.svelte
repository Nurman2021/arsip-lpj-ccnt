<script lang="ts">
	import Footer from './Footer.svelte';
	import Login from '../../routes/auth/Login.svelte';
	import Signup from '../../routes/auth/Signup.svelte';

	let showLogin = true;
	function viewLogin() {
		showLogin = !showLogin;
	}
</script>

<svelte:head>
	<title>Akun | Arsip LPJ</title>
</svelte:head>
{#if showLogin}
	<Login on:loginSubmit={() => (showLogin = false)} />
{:else}
	<Signup on:signupSubmit={() => (showLogin = true)} />
{/if}

<Footer />
