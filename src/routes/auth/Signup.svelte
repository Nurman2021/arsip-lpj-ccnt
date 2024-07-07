<script>
	import { createEventDispatcher } from 'svelte';
	import GoogleSign from '$lib/components/GoogleSign.svelte';
	const dispatch = createEventDispatcher();

	function handleSignup() {
		dispatch('signupSubmit');
	}

	let nra = '';
	let no_telp = '';
	let email = '';
	let jenis_kelamin = '';
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
				<GoogleSign btnClass="w-full" />
				<p class=" font-extrabold text-gray-300">or</p>
			</div>
			<div>
				<label class="block text-gray-700" for="stambuk">Nra</label>
				<input
					type="text"
					name="stambuk"
					id=""
					placeholder="Masukkan NRA / Email"
					class="w-full px-4 py-3 rounded-2xl mt-2 border focus:outline-none"
					required
					bind:value={nra}
				/>
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
					bind:value={email}
				/>
			</div>

			<div>
				<label class="block text-gray-700" for="stambuk">Jenis kelamin</label>
				<div class="flex items-center mb-4">
					<input
						id="default-radio-1"
						type="radio"
						value=""
						name="default-radio"
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label
						for="default-radio-1"
						class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Perempuan</label
					>
				</div>
				<div class="flex items-center">
					<input
						checked
						id="default-radio-2"
						type="radio"
						value=""
						name="default-radio"
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label
						for="default-radio-2"
						class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laki - laki</label
					>
				</div>
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
