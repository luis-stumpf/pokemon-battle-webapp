<script lang="ts">
    export let pokemon;
</script>

<div class="card w-1/3">
    <header class="card-header">{pokemon.name}</header>
    <section class="p-8">
        <div class="flex items-center justify-center">
            <img class="h-72 " alt="pokemon" src={pokemon.spriteFront}>
        </div>
        <div class="card">
           <header class="card-header">Attacks</header>
            <section class="p-2">
                <div class="grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-2">
                    {#each pokemon.moveSet as move }
                        <button type="button" class="btn variant-filled">{move}</button>
                    {/each}
                </div>
            </section>
        </div>
    </section>
</div>
