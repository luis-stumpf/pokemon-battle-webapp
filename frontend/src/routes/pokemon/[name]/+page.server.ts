import type {PageServerLoad} from "./$types";

export const load = (async ({ params }) => {

    try {
        const { name } = params;
        const response = await fetch(`http://localhost:3000/pokemon/${name}`);
        const pokemon = await response.json()
        console.log(pokemon)
        return {
            name,
            pokemon
        }
    } catch (e) {
        console.log(e)
    }
}) satisfies PageServerLoad;