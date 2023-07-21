<script lang="ts">
    import type { PageServerLoad } from './$types'

    export let data: PageServerLoad;
</script>

<div>
    <img alt="pokemon" src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${data.name}.gif`}>
    <img alt="pokemon" src={data.pokemon.spriteBack}>
    <div>
        {#each data.pokemon.moveSet as move }
            <button type="button" class="btn variant-filled">{move}</button>
        {/each}
    </div>
</div>