import { user } from './userStore';

declare const google: any;
// function onGoogleScriptLoad(decodeJwtResponse: any) {
// 	try {
// 		const handleCredentialResponse = (response: any) => {
// 			const data = decodeJwtResponse(response.credential);
// 			console.log(data);
// 			setSessionToken(data.jti);
// 			setUserData(data.email, data.sub, data.picture);
// 		};
// 		google.accounts.id.initialize({
// 			client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
// 			callback: handleCredentialResponse
// 		});
// 		google.accounts.id.renderButton(document.getElementById('googleSignIn'), {
// 			theme: 'outline',
// 			size: 'large',
// 			data_text: 'signin_with',
// 			shape: 'pill',
// 			logo_alignment: 'left'
// 		});
// 		google.accounts.id.prompt();
// 	} catch {}
// }

function onGoogleScriptLoad(decodeJwtResponse: any) {
	const handleCredentialResponse = (response: any) => {
		const data = decodeJwtResponse(response.credential);
		console.log(data);
		setSessionToken(data.jti);
		setUserData(data.email, data.sub, data.picture);
		// window.location.href = '/';
	};

	// Initialize Google Sign-In
	google.accounts.id.initialize({
		client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
		callback: handleCredentialResponse
	});

	// Render Google Sign-In button
	google.accounts.id.renderButton(document.getElementById('googleSignIn'), {
		theme: 'outline',
		size: 'large',
		data_text: 'signin_with',
		shape: 'pill',
		logo_alignment: 'left'
	});
	google.accounts.id.prompt();
}

function decodeJwtResponse(token: string) {
	const base64Url = token.split('.')[1];
	const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	const jsonPayload = decodeURIComponent(
		atob(base64)
			.split('')
			.map((c) => {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join('')
	);

	return JSON.parse(jsonPayload);
}

async function loginDefault(login: string, password: string) {
	try {
		const response = await fetch('http://ccn-arsip-lpj.abdmutawalliamar.my.id/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ login, password })
		});

		if (!response.ok) {
			throw new Error('login gagal');
		}

		const data = response.json();
		return data;
	} catch (error: any) {
		return { error: error.message };
	}
}

function getSessionToken() {
	return localStorage.getItem('authToken');
}

function isLoggedIn() {
	const token = getSessionToken();
	console.log(token);
	return Boolean(token);
}

function setSessionToken(token: any) {
	localStorage.setItem('authToken', token);
}

function clearSessionToken() {
	localStorage.removeItem('authToken');
	localStorage.clear();
}

function setUserData(email: string, id: string, photo: string) {
	user.update((user) => ({
		...user,
		email,
		id,
		photo
	}));
}
export {
	decodeJwtResponse,
	onGoogleScriptLoad,
	loginDefault,
	isLoggedIn,
	clearSessionToken,
	setSessionToken,
	setUserData
};
