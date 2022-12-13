import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemons as getPokemonsAPI, IPokemons } from '../../../api/pokeAPI';

export const getPokemons = createAsyncThunk<
  //The type of the return
  IPokemons,
  //The type of the paramenter
  number
>('pokemon/fetch', async (page: number = 1) => {
  const pokemons = await getPokemonsAPI(page);
  return pokemons;
});
