<script lang="ts">
  const taglines = [
    "the wpis are wip-ing",
    "computers are kinda cool i guess",
    "you can just do things",
  ];
</script>

<a href="/" class="text-xl font-bold text-border mb-0.5 text-center flex gap-3 justify-center group">
  <span class="group-hover:text-accent">{"<"}</span>
  <span class="text-fg italic">deltea</span>
  <span class="group-hover:text-accent">{">"}</span>
</a>

<h2 class="text-border mb-8">"{taglines[Math.floor(Math.random() * taglines.length)]}"</h2>

<nav class="w-full justify-center flex items-center gap-6 py-4 border-y-2 border-border border-dashed text-border mb-12">
  <a class="hover:text-accent text-bright" href="/">home</a>
  <span>/</span>
  <a class="hover:text-accent text-bright" href="/#games">games</a>
  <span>/</span>
  <a class="hover:text-accent text-bright" href="/#web">apps</a>
  <span>/</span>
  <a class="hover:text-accent text-bright" href="/#tech">tech</a>
</nav>
