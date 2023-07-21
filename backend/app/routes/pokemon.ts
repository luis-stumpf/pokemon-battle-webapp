import { Request, Response, Router } from 'express';
import { isAxiosError } from 'axios';
import pokemonClient from "../lib/axios";
import {Pokemon, PokemonMove} from "pokenode-ts";
import {calcHp, calcStat} from "../lib/utils/calcStats";
import constants from "../lib/utils/constants";

const pokemonRouter = Router();

const randomMoveSet = (moves: PokemonMove[]) => {
  const moveSetNames: string[] = [];
  for (let i = 0; i < 4; i++) {
    const random = Math.random() * moves.length;
    moveSetNames.push(moves.at(random)!.move.name);
  }

  return moveSetNames
}

const extractRelevantData = (pokemon: Pokemon, level: number) => {
  const {
    name,
    stats,
    moves
  } = pokemon

  const statsByLevel = stats.map(s => {
    if (s.stat.name === "hp") {
      return {[s.stat.name]: calcHp(s.base_stat, s.effort, level)};
    }
    return {[s.stat.name]: calcStat(s.base_stat, s.effort, level)};
  })

  const moveSet = randomMoveSet(moves);
  const spriteBack = `${constants.POKEMON_DB.GIF_URL.back + name}.gif`
  const spriteFront = `${constants.POKEMON_DB.GIF_URL.front + name}.gif`

  return {name, statsByLevel, moveSet, spriteBack, spriteFront };
}


pokemonRouter.get('/:name', async (req: Request, res: Response) => {
  const { name } = req.params;
  try {
    const response = await pokemonClient.getPokemonByName(name);
    const pokemon = extractRelevantData(response, 3);
    res.send(pokemon)
  } catch (error) {
    res.status(500);
    if (isAxiosError(error)) console.log(error.response);
    res.send(error);
  }
});

export default pokemonRouter;
