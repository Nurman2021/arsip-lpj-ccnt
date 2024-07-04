<script>
	import './styles.css';
	import { onMount } from 'svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Auth from '$lib/components/Auth.svelte';
	import { isLoggedIn } from '$lib/auth';

	let hasSession = false;

	onMount(() => {
		checkSession();
	});

	function checkSession() {
		hasSession = isLoggedIn();
	}
</script>

{#if hasSession}
	<div class="app">
		<Sidebar />
		<main class="flex flex-col justify-between">
			<slot />
			<Footer />
		</main>
	</div>
{:else}
	<Auth />
{/if}

<style>
	.app {
		display: flex;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
