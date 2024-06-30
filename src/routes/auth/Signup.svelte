<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleSignup() {
		dispatch('signupSubmit');
	}

	let username = '';
	let password = '';
</script>

<section class="flex flex-col items-center p-6">
	<div class="sign-hero text-white font-bold flex flex-col items-center justify-center">
		<h1>Selamat Datang!</h1>
		<p>Silahkan isi data diri dan sertakan nim/Email</p>
	</div>
	<div class="sign-form w-1/2 p-6">
		<form class="mt-6" action="#" method="POST">
			<div class="flex flex-col items-center gap-4">
				<p class=" font-extrabold">Register With</p>
				<button
					type="button"
					class="w-auto block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-2xl px-4 py-3 border border-gray-300"
				>
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
				</button>
				<p class=" font-extrabold text-gray-300">or</p>
			</div>

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
						px-4 py-3 mt-6">Signup</button
			>
		</form>
		<div class="mt-8 flex justify-center gap-1 font-semibold">
			Sudah punya akun? mari<button on:click={handleSignup} class=" text-lpj-teal-300">
				Login</button
			>
		</div>
	</div>
</section>

<style>
	.sign-form {
		box-shadow: rgba(0, 0, 0, 0.05) 0px 20px 27px 0px;
		border-radius: 15px;
		max-width: 384px;
		background-color: white;
		top: -50px;
		position: relative;
	}

	.sign-hero {
		background: url('src/lib/img/BgSignUp.png') no-repeat center;
		background-size: cover;
		width: 100%;
		height: 384px;
		border-radius: 15px;
	}
</style>
