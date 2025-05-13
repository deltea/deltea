<script lang="ts">
	import "../app.css";
  import "iconify-icon";
  import { onMount } from "svelte";

  // vercel stuff
  import { injectAnalytics } from "@vercel/analytics/sveltekit"
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";

  injectAnalytics();
  injectSpeedInsights();

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

