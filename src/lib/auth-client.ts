// import "dotenv/config"
// import { createAuthClient } from 'better-auth/svelte';


// const BASE_URL = process.env.BETTER_AUTH_URL;
// // if(!BASE_URL){
// // 	throw new Error('base url is undefined')
// // }

// export const authClient = createAuthClient({
// 		baseURL:BASE_URL,
// });

// export const { signIn, signUp, useSession } = createAuthClient();

import { createAuthClient } from 'better-auth/svelte';
export const authClient = createAuthClient({
		baseURL:"http://localhost:5173",
});

 export const { signIn, signUp, useSession } = createAuthClient();
