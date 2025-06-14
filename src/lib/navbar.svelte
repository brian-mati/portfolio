<script lang="ts">
    import { page } from "$app/state";
    import { fade,fly } from 'svelte/transition';
    let visible = $state(false)
</script>

<nav class="h-16 bg-gray-navs min-w-full border-2 border-b-black mb-8 px-2 py-2">
    <ul class=" items-center justify-between  gap-8 max-w-lg mx-auto py-4 hidden lg:flex">
        <a  aria-current={page.url.pathname === '/' ? 'page' : undefined} href="/" class="hover:scale-125 transition duration-150 delay-75 hover:drop-shadow-sm hover:shadow-black">Home</a>

        <a aria-current={page.url.pathname === '/whoami' ? 'page' : undefined}  href="/whoami" class="hover:scale-125 transition duration-150 delay-75 hover:drop-shadow-sm hover:shadow-black">Whoami</a>

        <a aria-current={page.url.pathname === '/blog' ? 'page' : undefined}  href="/blog" class="hover:scale-125 transition duration-150 delay-75 hover:drop-shadow-sm hover:shadow-black">Blog</a>

        <a aria-current={page.url.pathname === '/contact-me' ? 'page' : undefined}  href="/contact-me" class="hover:scale-125 transition duration-150 delay-75 hover:drop-shadow-sm hover:shadow-black">Contact me</a>

    </ul>

    <ul class=" items-center justify-between  gap-8 max-w-lg mx-auto  py-4  flex lg:hidden">
        <button class="h-fit flex items-center gap-2" onclick={() => {
            if (visible == false){
                visible = true
            } else{
                visible = false
            }
            console.log(visible)
           
        }}>
            <img src="/menu-icon.png" alt="" class="h-8 ">
            {#if visible}
            <div in:fade out:fly={{ y:100 ,duration:1000}}>
                <a  aria-current={page.url.pathname === '/' ? 'page' : undefined} href="/" class="hover:scale-125 transition duration-150 delay-75 hover:drop-shadow-sm hover:shadow-black">Home</a>
                <a aria-current={page.url.pathname === '/whoami' ? 'page' : undefined}  href="/whoami" class="hover:scale-125 transition duration-150 delay-75 hover:drop-shadow-sm hover:shadow-black">Whoami</a>
            </div>
            {/if}
           
        </button>
       

        <div class="flex gap-4 items-center">
            <a aria-current={page.url.pathname === '/blog' ? 'page' : undefined}  href="/blog" class="hover:scale-125 transition duration-150 delay-75 hover:drop-shadow-sm hover:shadow-black">Blog</a>
            <a aria-current={page.url.pathname === '/contact-me' ? 'page' : undefined}  href="/contact-me" class="hover:scale-125 transition duration-150 delay-75 hover:drop-shadow-sm hover:shadow-black">Contact me</a>
        </div>

    </ul>
</nav>

<style>
    a[aria-current='page']::before {
	/* other existing rules */
	view-transition-name: active-page;
}
</style>