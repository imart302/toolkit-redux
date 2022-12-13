import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPokemons } from '../../../api/pokeAPI';
import { getPokemons } from './thunks';

export interface IPokemonState {
  fetchStatus: 'loading' | 'error' | 'idle' | 'done';
  pokemons: IPokemons | null;
  fetchError: null | Error; 
}

const initialState: IPokemonState = {
  fetchStatus: 'idle',
  pokemons: null,
  fetchError: null,
}

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemons: (state => {
      state.fetchStatus = 'loading';
    }),
    setPokemons: ((state, action: PayloadAction<any>) => {
      console.log(action);
    }),
    resetFetch : (state) => {
      state.fetchStatus = 'idle';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemons.pending, (state, action) => {
      state.fetchStatus = 'loading';
    });
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload;
      state.fetchStatus = 'done'
    });
    builder.addCase(getPokemons.rejected, (state, action) => {
      state.fetchError = new Error('Failed to load');
      state.fetchStatus = 'error';
    });
  }
});

export const { startLoadingPokemons, setPokemons, resetFetch } = pokemonSlice.actions

export default pokemonSlice.reducer