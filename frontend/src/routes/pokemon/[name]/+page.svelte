<script lang="ts">
    import type { PageServerLoad } from './$types'
    import PokemonInfoCard from "$lib/components/PokemonInfoCard.svelte";

    export let data: PageServerLoad;
</script>

<div class="m-4">
    <PokemonInfoCard pokemon={data.pokemon} />
</div>