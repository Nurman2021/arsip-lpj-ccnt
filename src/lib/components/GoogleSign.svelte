<script lang="ts">
	import { auth, provider, signInWithPopup } from '$lib/firebase';
	import { writable } from 'svelte/store';

	export const user = writable<{ name: string; email: string; photo: string } | null>(null);

	async function signIn() {
		try {
			const result = await signInWithPopup(auth, provider);
			const user = result.user;
			user.set({
				name: user.displayName!,
				email: user.email!,
				photo: user.photoURL!
			});
		} catch (error) {
			console.error('Error signing in with Google: ', error);
		}
	}
</script>

<button on:click={signIn}>Sign in with Google</button>

<style>
	button {
		font-size: 1rem;
		padding: 0.5rem 1rem;
		background-color: #4285f4;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	button:hover {
		background-color: #357ae8;
	}
</style>
