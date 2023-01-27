<script lang="ts">
    export let description: String
    export let ref: String

    const words = description.split(" ").map(word => word + " ")
</script>

<p class="w-full text-justify">
    {#each words as word, i}
        {#if i <= 0}
            <b>{word}</b>
        {:else}
            {word}
        {/if}
    {/each}
    <a class="text-xs text-blue-800" target="_blank" rel="noreferrer" href={ref}>[ref]</a>
</p>