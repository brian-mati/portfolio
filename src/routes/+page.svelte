<script lang="ts">
	
    import { UseClipboard } from '$lib/hooks/use-clipboard.svelte';
    import { fade,fly } from 'svelte/transition';
    

	const email = 'brianmuthomimati@gmail.com';
    const clipboard = new UseClipboard({delay:500});
</script>


<p class="mt-8">Hello. I am Muthomi Brian Mati. A freelance web developer and designer . I enjoy bringing ideas to mind in code on this digital scape and shape the internet as we wish it to be.</p>



<button
  class="flex items-center mt-8 h-11 border-2 border-black w-fit"
  onclick={async () => {
    await clipboard.copy(email)
  }}
>
  <div class="bg-gray-navs px-4 h-full flex items-center">
    <p>{email}</p>
  </div>

  <div class="bg-light-accent h-full p-4 flex items-center justify-center">
    <img src="/copy-icon.png" alt="copy icon" aria-label="copy icon" />
  </div>
</button>
{#if clipboard.status == "success"}
<p in:fade out:fly={{ y:100 ,duration:1000}}>
    Copied successfully
</p>
{:else if clipboard.status =="failure"}
<p>Try again</p>
{:else}
<p></p>
{/if}

