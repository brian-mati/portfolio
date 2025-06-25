import { auth } from '$lib/auth';
import { redirect } from '@sveltejs/kit';
import { svelteKitHandler } from 'better-auth/svelte-kit';

export async function handle({ event, resolve }) {
	const session = await auth.api.getSession({
		headers: event.request.headers
	});

	if (session) {
		event.locals.user = session.user;
		event.locals.session = session.session;
	// 	console.info(event.locals.user);
	 }
	if ( event.url.pathname.includes("dashboard") && !event.locals.session){
		redirect(308,"/")
	} 	
	return svelteKitHandler({ event, resolve, auth });
}