import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonCard } from './pokemon/components/PokemonCard';
import { AppDispatch, RootState, useTypedSelector } from './store';
import { getPokemons, resetFetch } from './store/slices/pokemon';

export const PokemonApp = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch<AppDispatch>(); // 1
  const pokemons = useSelector((state: RootState) => state.pokemon.pokemons);
  const pokeFetchStatus = useSelector(
    (state: RootState) => state.pokemon.fetchStatus
  );

  const onNextPage = () => {
    setPage((actual) => actual + 1);
    dispatch(resetFetch());
  }

  useEffect(() => {
    console.log(pokemons);
    if (pokeFetchStatus == 'idle') {
      dispatch(getPokemons(page)); // 1
    }
  }, [pokemons, pokeFetchStatus, page]);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      {pokeFetchStatus == 'loading' ? (
        <>
          <p>Loading</p>
        </>
      ) : pokeFetchStatus == 'idle' ? (
        <>
          <p>Not called</p>
        </>
      ) : (
        <>

          <ul>
            {pokemons?.results.map( pokemon => <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />)}
          </ul>
        </>
      )}
      <button disabled={pokeFetchStatus == 'loading' ? true: false} onClick={onNextPage}>
        Next
      </button>
    </>
  );
};

// *1 for making work dispatch(getPokemons) use dispatch must be typed to AppDispatch
