<script lang="ts">
  import { onMount, type Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();

  let isDragging = false;
  let element: HTMLElement | null = null;

  onMount(() => {
    document.addEventListener("mousemove", handleDragging);
    document.addEventListener("mouseup", handleDragEnd);
  });

  function handleDragStart(event: MouseEvent) {
    isDragging = true;
  }

  function handleDragging(event: MouseEvent) {
    event.preventDefault();

    if (isDragging && element) {
      const x = +element.style.left.replace("px", "");
      const y = +element.style.top.replace("px", "");
      element.style.left = `${x + event.movementX}px`;
      element.style.top = `${y + event.movementY}px`;
    }
  }

  function handleDragEnd(event: MouseEvent) {
    isDragging = false;
  }
</script>

<div class="border-4 border-border absolute max-w-xl" bind:this={element}>
  <div
    onmousedown={handleDragStart}
    role="button"
    tabindex="0"
    class="cursor-move bg-border h-10 flex items-center px-4 select-none justify-between"
  >
    <span>title</span>

    <button class="cursor-pointer" onclick={() => element?.parentNode?.removeChild(element)}>[x]</button>
  </div>

  <div class="p-4">{@render children()}</div>
</div>
