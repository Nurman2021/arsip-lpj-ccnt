<script>
	import { user } from '$lib/userStore';
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
