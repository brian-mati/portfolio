<script lang="ts">
    import { authClient } from "$lib/auth-client";
  
    const onclick = async () => {
        console.info("it works")
        const data = await authClient.signIn.social({
          provider:"github"  
        })
    }
</script>

<h1>Hello there auth page

    
</h1>

<button {onclick}>Signup</button>