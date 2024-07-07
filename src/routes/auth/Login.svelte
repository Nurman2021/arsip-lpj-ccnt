<script>
	import { createEventDispatcher } from 'svelte';
	import wallpaper from '$lib/img/signInImage.png';
	import placeholder from '$lib/img/placeholder.png';
	import GoogleSign from '$lib/components/GoogleSign.svelte';
	import { loginDefault, setSessionToken, setUserData } from '$lib/auth';

	const dispatch = createEventDispatcher();

	function swap() {
		dispatch('loginSubmit');
	}

	async function handleLogin() {
		try {
			const response = await loginDefault(username, password);
			console.log(response);
			// setUserData(response.email, response.nra, placeholder);
			// setSessionToken(response.token);
			// window.location.href = '/';
		} catch (error) {
			console.error('Login failed:', error);
			alert('Login failed. Please check your credentials and try again.');
		}
	}

	let username = '';
	let password = '';
</script>

<section class="flex flex-col md:flex-row flex-wrap h-screen items-center">
	<div
		class="w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 h-screen px-6 lg:px-16 xl:px-12
              flex items-center justify-center text-sm"
	>
		<div class="w-full md:w-80 h-100">
			<h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">ARSIP LPJ COCONUT</h1>
			<hr class="my-6 border-gray-300 w-full" />
			<form class="mt-6" action="#" method="POST" on:submit|preventDefault={handleLogin}>
				<div>
					<label class="block text-gray-700" for="stambuk">Email</label>
					<input
						type="text"
						name="stambuk"
						id=""
						placeholder="Masukkan NRA / Email"
						class="w-full px-4 py-3 rounded-2xl mt-2 border focus:outline-none"
						required
						bind:value={username}
					/>
				</div>

				<div class="mt-4">
					<label class="block text-gray-700" for="password">Password</label>
					<input
						type="text"
						name="password"
						id=""
						placeholder="Masukkan Password"
						minlength="6"
						class="w-full px-4 py-3 rounded-2xl mt-2 border focus:outline-none"
						required
						bind:value={password}
					/>
				</div>

				<div class="text-right mt-2" />

				<button
					type="submit"
					class="w-full block bg-lpj-teal-300 hover:bg-lpj-teal-200 focus:bg-sky-400 text-white font-semibold rounded-2xl
                            px-4 py-3 mt-6">Log In</button
				>
			</form>

			<hr class="my-6 border-gray-300 w-full" />
			<GoogleSign btnClass="w-full" />
			<div class="mt-8 flex justify-center gap-1">
				Belum punya akun? <button class="font-semibold text-lpj-teal-300" on:click={swap}
					>SignUp
				</button>
			</div>
		</div>
	</div>
	<div class=" bg-lpj-teal hidden lg:block w-full md:w-1/2 h-screen pl-16 pb-16">
		<img src={wallpaper} alt="wallpaper" class="w-full h-full object-cover rounded-bl-3xl" />
	</div>
</section>
