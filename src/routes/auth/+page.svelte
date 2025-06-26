<script lang="ts">
    import { authClient } from "$lib/auth-client";
  
    const onclick = async () => {
        console.info("it works")
        const data = await authClient.signIn.social({
          provider:"github"  
        })
    }
</script>

<h1>Hello there auth page </h1>

<button {onclick} class="bg-light-accent max-w-fit mx-auto mt-[25%] py-2 px-8 text-white font-bold text-lg border-black border-2 hover:scale-120 transition-all duration-200 ease-in-out hover:duration-200 hover:delay-75 hover:transition hover:ease-in-out ">Sign in</button>