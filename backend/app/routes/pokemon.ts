import { Request, Response, Router } from 'express';
import { isAxiosError } from 'axios';
import pokemonClient from "../lib/axios";
import {Pokemon, PokemonMove} from "pokenode-ts";
import {calcHp, calcStat} from "../lib/utils/calcStats";

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
    sprites: {
      back_default: backSprite,
      front_default: frontSprite,
    },
    moves
  } = pokemon

  const statsByLevel = stats.map(s => {
    if (s.stat.name === "hp") {
      return {[s.stat.name]: calcHp(s.base_stat, s.effort, level)};
    }
    return {[s.stat.name]: calcStat(s.base_stat, s.effort, level)};
  })

  const moveSet = randomMoveSet(moves);

  return {name, statsByLevel, moveSet, backSprite, frontSprite};
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
