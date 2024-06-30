<script>
	import wallpaper from '$lib/img/signInImage.png';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleLogin() {
		dispatch('loginSubmit');
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
			<form class="mt-6" action="#" method="POST">
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
			<button
				type="button"
				class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-2xl px-4 py-3 border border-gray-300"
			>
				<div class="flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						class="w-6 h-6"
						viewBox="0 0 48 48"
						><defs
							><path
								id="a"
								d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
							/></defs
						><clipPath id="b"><use xlink:href="#a" overflow="visible" /></clipPath><path
							clip-path="url(#b)"
							fill="#FBBC05"
							d="M0 37V11l17 13z"
						/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path
							clip-path="url(#b)"
							fill="#34A853"
							d="M0 37l30-23 7.9 1L48 0v48H0z"
						/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg
					>
					<span class="ml-4"> Log in with Google</span>
				</div>
			</button>
			<div class="mt-8 flex justify-center gap-1">
				Belum punya akun? <button class="font-semibold text-lpj-teal-300" on:click={handleLogin}
					>SignUp
				</button>
			</div>
		</div>
	</div>
	<div class=" bg-lpj-teal hidden lg:block w-full md:w-1/2 h-screen pl-16 pb-16">
		<img src={wallpaper} alt="wallpaper" class="w-full h-full object-cover rounded-bl-3xl" />
	</div>
</section>
