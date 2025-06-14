<script lang="ts">
    import { page } from "$app/stores";
</script>

<nav class="h-16 bg-gray-navs min-w-full border-2 border-b-black mb-8">
    <ul class="flex items-center justify-between  gap-8 max-w-lg mx-auto py-4">
        <a  aria-current={$page.url.pathname === '/' ? 'page' : undefined} href="/" class="hover:scale-125 transition duration-150 delay-75 hover:drop-shadow-sm hover:shadow-black">Home</a>

        <a aria-current={$page.url.pathname === '/whoami' ? 'page' : undefined}  href="/whoami" class="hover:scale-125 transition duration-150 delay-75 hover:drop-shadow-sm hover:shadow-black">Whoami</a>

        <a aria-current={$page.url.pathname === '/blog' ? 'page' : undefined}  href="/blog" class="hover:scale-125 transition duration-150 delay-75 hover:drop-shadow-sm hover:shadow-black">Blog</a>

        <a aria-current={$page.url.pathname === '/contact-me' ? 'page' : undefined}  href="/contact-me" class="hover:scale-125 transition duration-150 delay-75 hover:drop-shadow-sm hover:shadow-black">Contact me</a>

    </ul>
</nav>

<style>
    a[aria-current='page']::before {
	/* other existing rules */
	view-transition-name: active-page;
}
</style>