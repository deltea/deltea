<script lang="ts">
  import Separator from "$lib/components/Separator.svelte";

  interface Project {
    title: string;
    type: "web" | "game";
    description: string;
    image: string;
    link: string;
    source?: string;
  }

  interface Tech {
    icon: string;
    color: string;
    link: string;
  }

  const projects: Project[] = [
    // ------ game projects ------
    {
      title: "Power Cut",
      type: "game",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      image: "/images/projects/power-cut.png",
      link: "https://deltea.itch.io/power-cut",
      source: "https://github.com/deltea/power-cut"
    },
    {
      title: "Catalyst",
      type: "game",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      image: "/images/projects/catalyst.png",
      link: "https://deltea.itch.io/catalyst",
      source: "https://github.com/deltea/brj-exchange"
    },
    {
      title: "JetCat",
      type: "game",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      image: "/images/projects/jetcat.png",
      link: "https://deltea.itch.io/jetcat",
      source: "https://github.com/deltea/Gravity"
    },
    {
      title: "G R A P P L E",
      type: "game",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      image: "/images/projects/grapple.png",
      link: "https://deltea.itch.io/grapple",
    },
    {
      title: "RPGeometry",
      type: "game",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      image: "/images/projects/rpgeometry.png",
      link: "https://deltea.itch.io/rpgeometry",
    },
    {
      title: "Long Shot",
      type: "game",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      image: "/images/projects/long-shot.png",
      link: "https://deltea.itch.io/long-shot",
    },

    // ------ web projects ------
    {
      title: "ChatJippity",
      type: "web",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      image: "/images/projects/chatjippity.png",
      link: "https://chatjippity.vercel.app/",
      source: "https://github.com/deltea/chat-jippity"
    },
    {
      title: "The Movie Game",
      type: "web",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      image: "/images/projects/the-movie-game.png",
      link: "https://the-movie-game.vercel.app/",
      source: "https://github.com/deltea/themoviegame",
    },
    {
      title: "YouGuess",
      type: "web",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      image: "/images/projects/youguess.png",
      link: "https://youguess.vercel.app/",
      source: "https://github.com/deltea/youguess",
    }
  ];

  const techs: Tech[] = [
    {
      icon: "ri:svelte-fill",
      color: "#F54419",
      link: "https://svelte.dev",
    },
    {
      icon: "ri:tailwind-css-fill",
      color: "#00B5F7",
      link: "https://tailwindcss.com/",
    },
    {
      icon: "simple-icons:github",
      color: "#E6ECF3",
      link: "https://github.com",
    },
    {
      icon: "mdi:language-typescript",
      color: "#3175C0",
      link: "https://www.typescriptlang.org/",
    },
    {
      icon: "simple-icons:obsidian",
      color: "#A186F1",
      link: "https://obsidian.md/",
    },
    {
      icon: "mingcute:arc-browser-fill",
      color: "#F49495",
      link: "https://arc.net",
    },
    {
      icon: "simple-icons:godotengine",
      color: "#4C8BBB",
      link: "https://godotengine.org/",
    },
    {
      icon: "tabler:brand-vercel-filled",
      color: "#F5F5F6",
      link: "https://vercel.com/",
    },
    {
      icon: "simple-icons:bambulab",
      color: "#12A742",
      link: "https://bambulab.com/",
    },
    {
      icon: "cib:itch-io",
      color: "#F55959",
      link: "https://itch.io/",
    },
    {
      icon: "mingcute:vscode-fill",
      color: "#27A3E9",
      link: "https://code.visualstudio.com/",
    },
    {
      icon: "simple-icons:raycast",
      color: "#FA6B6D",
      link: "https://raycast.com/",
    }
  ]
</script>

{#each ["game", "web"] as type}
  <div id={type} class="flex items-center gap-4 mb-12 text-border italic text-lg">
    <h2 class="underline text-accent underline-offset-8 decoration-2 font-bold">
      {type === "game" ? "games" : "web apps"}
    </h2>

    <p>{"->"}</p>

    <h2 class="text-surface">
      {type === "game"
        ? "some small games i made"
        : "random web apps i made"}
    </h2>
  </div>

  <ul class="gap-x-6 gap-y-12 grid grid-cols-2">
    {#each projects.filter(p => p.type === type) as project}
      <li class="w-full flex flex-col gap-4 items-start">
        <div class="border-2 border-border hover:border-accent border-dashed rounded-md flex items-center justify-center p-4 w-full">
          <a
            href={project.link}
            target="_blank"
            class="bg-cover w-full aspect-[3/2] rounded-md bg-center"
            style="background-image: url({project.image});"
            aria-label="button"
          ></a>
        </div>

        <a href={project.link} class="font-bold" target="_blank">{project.title}</a>

        <p class="text-surface italic">{project.description}</p>

        <div class="flex items-center gap-4">
          <a class="hover:text-accent" target="_blank" href={project.link}>link</a>
          <p class="h-5 border-l-2 border-border"></p>
          <a class="hover:text-accent" target="_blank" href={project.source}>source code</a>
        </div>
      </li>
    {/each}
  </ul>

  <Separator />
{/each}

<div id="tech" class="flex items-center gap-4 mb-12 text-border italic text-lg">
  <h2 class="underline text-accent underline-offset-8 decoration-2 font-bold">
    tech
  </h2>

  <p>{"->"}</p>

  <h2 class="text-surface">
    the tools i use to make stuff with
  </h2>
</div>

<ul class="grid grid-cols-6 gap-6">
  {#each techs as tech}
    <a
      aria-label="button"
      href={tech.link}
      class="border-2 border-dashed border-border hover:border-[var(--color)] flex justify-center items-center size-20 rounded-md text-bright group"
      style="--color: {tech.color};"
      target="_blank"
    >
      <iconify-icon icon={tech.icon} class="text-2xl group-hover:text-[var(--color)]"></iconify-icon>
    </a>
  {/each}
</ul>

<h3 class="mt-8">...and many more</h3>

<Separator />
