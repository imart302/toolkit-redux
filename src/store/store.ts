import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from "./slices/pokemon/";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useTypedSelector: TypedUseSelectorHook<
  RootState
> = useSelector;