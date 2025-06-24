import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from './server/db';
import { GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET } from '$env/static/private';
import { error } from 'console';

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET){
    throw error("github keys absent")
}


export const auth = betterAuth({
	emailAndPassword: {
		enabled: true
	},
    socialProviders:{
        github:{
                clientId: GITHUB_CLIENT_ID, 
            clientSecret: GITHUB_CLIENT_SECRET, 
        },
    },
	cookieCache: {
		enabled: true, // Enable caching session in cookie (default: `false`)
		maxAge: 3600 // 5 minutes
	},
	database: drizzleAdapter(db, {
		provider: 'sqlite' // or "mysql", "sqlite"
	})
});