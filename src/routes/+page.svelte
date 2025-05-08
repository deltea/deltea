<script lang="ts">
  interface Project {
    title: string;
    type: "web" | "game";
    description: string;
    image: string;
    link: string;
    source?: string;
  }

  let projects: Project[] = [
    {
      title: "jetcat",
      type: "game",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      image: "/images/projects/jetcat.png",
      link: "https://deltea.itch.io/jetcat",
      source: "https://github.com/deltea/Gravity"
    },
    {
      title: "catalyst",
      type: "game",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      image: "/images/projects/catalyst.png",
      link: "https://deltea.itch.io/catalyst",
      source: "https://github.com/deltea/brj-exchange"
    }
  ];
</script>

<div class="flex items-center gap-4 mb-12 text-border text-lg">
  <h2 class="underline text-accent underline-offset-8 decoration-2 font-bold">games</h2>
  <p>{">"}</p>
  <h2>the random fun things i made</h2>
</div>

<ul class="gap-6 grid grid-cols-2">
  {#each projects.filter(p => p.type === "game") as project}
    <li class="w-full flex flex-col gap-3 items-start">
      <div class="border-2 border-border hover:border-accent border-dashed flex items-center justify-center p-4 w-full">
        <a
          href={project.link}
          target="_blank"
          class="bg-cover w-full aspect-[3/2]"
          style="background-image: url({project.image});"
          aria-label="button"
        ></a>
      </div>

      <a href={project.link} class="font-bold" target="_blank">{project.title}</a>

      <p class="text-border">{project.description}</p>

      <div class="flex items-center gap-4">
        <a class="hover:text-accent" target="_blank" href={project.link}>link</a>
        <p class="h-5 border-l-2 border-border"></p>
        <a class="hover:text-accent" target="_blank" href={project.source}>source code</a>
      </div>
    </li>
  {/each}
</ul>

<hr class="border-t-2 border-border border-dashed w-full my-12">

<div class="flex items-center gap-4 mb-12 text-border text-lg">
  <h2 class="underline text-accent underline-offset-8 decoration-2 font-bold">web apps</h2>
  <p>{">"}</p>
  <h2>the random web stuff i made</h2>
</div>

<ul class="gap-6 grid grid-cols-2">
  {#each projects.filter(p => p.type === "web") as project}
    <li class="w-full flex flex-col gap-3 items-start">
      <div class="border-2 border-border hover:border-accent border-dashed flex items-center justify-center p-4 w-full">
        <a
          href={project.link}
          target="_blank"
          class="bg-cover w-full aspect-[3/2]"
          style="background-image: url({project.image});"
          aria-label="button"
        ></a>
      </div>

      <a href={project.link} class="font-bold" target="_blank">{project.title}</a>

      <p class="text-border">{project.description}</p>

      <div class="flex items-center gap-4">
        <a class="hover:text-accent" target="_blank" href={project.link}>link</a>
        <p class="h-5 border-l-2 border-border"></p>
        <a class="hover:text-accent" target="_blank" href={project.source}>source code</a>
      </div>
    </li>
  {/each}
</ul>
