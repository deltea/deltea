<script lang="ts">
	import "../app.css";
  import "iconify-icon";
  import { onMount } from "svelte";

  // vercel analytics
  import { injectAnalytics } from "@vercel/analytics/sveltekit"

  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";

  onMount(injectAnalytics);

	let { children } = $props();
</script>

<svelte:head>
  <title>_deltea</title>
</svelte:head>

<div class="min-h-screen flex justify-center">
  <main class="h-full w-[64rem] relative p-8 flex flex-col items-center">
    <Nav />

    {@render children()}

    <Footer />
  </main>
</div>

