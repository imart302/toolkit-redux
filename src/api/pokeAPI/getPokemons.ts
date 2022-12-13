import axios from 'axios';
import { IPokemons } from './interfaces';

export const getPokemons = async ( page = 1, limit=10) => {
  const offset = (page - 1)*limit;
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${ offset }&limit=${ limit }`;

  const response = await axios.get(url);
  return response.data as IPokemons
}