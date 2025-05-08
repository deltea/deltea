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
</script>

{#each ["game", "web"] as type}
  <div class="flex items-center gap-4 mb-12 text-border italic">
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

  <hr class="border-t-2 border-border border-dashed w-full my-12">
{/each}
