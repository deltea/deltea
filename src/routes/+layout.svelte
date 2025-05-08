<script lang="ts">
	import "../app.css";
  import "iconify-icon";

  import Nav from "$lib/components/Nav.svelte";

	let { children } = $props();
</script>

<div class="min-h-screen flex justify-center bg-bg text-fg selection:bg-accent selection:text-fg font-mono">
  <main class="h-full w-[64rem] relative p-8 flex flex-col">
    <!-- <Window>helowefwefwefwefwef</Window> -->
    <Nav />

    {@render children()}
  </main>
</div>

