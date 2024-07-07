<script>
	import { user } from '$lib/userStore';
	import { clearSessionToken, onGoogleScriptLoad, decodeJwtResponse } from '$lib/auth';
	// import { user } from './path/to/store';
	import placeholder from '$lib/img/placeholder.png';

	const userData = user;
	console.log(userData.subscribe);

	function logOut() {
		clearSessionToken();
		onGoogleScriptLoad(decodeJwtResponse);
		window.location.href = '/';
	}
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Whos Login?</h1>
	<img src={$user.photo} alt="gambar user" />
	<p>{$user.email}</p>
</div>
<button on:click={logOut}>Log out</button>
