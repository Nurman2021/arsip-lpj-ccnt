import { writable } from 'svelte/store';

export const user = writable({
	email: 'user_mail',
	id: 'id',
	photo: 'url_photo'
});
