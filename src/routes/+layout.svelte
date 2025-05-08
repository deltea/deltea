<script lang="ts">
	import "../app.css";
  import "iconify-icon";

  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();
</script>

<div class="min-h-screen flex justify-center">
  <main class="h-full w-[64rem] relative p-8 flex flex-col items-center">
    <Nav />

    {@render children()}

    <Footer />
  </main>
</div>

