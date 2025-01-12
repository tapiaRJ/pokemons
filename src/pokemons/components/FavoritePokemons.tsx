// rafc
'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import Pokemons from "@/store/pokemons/pokemons";

export const FavoritePokemons = () => {

  const favoritePokemons = useAppSelector(state => Object.values(state.pokemons));
  const [pokemons, setPokemons] = useState(favoritePokemons); // valor iniacial que va tener


  return (
    <>
      {/*   <PokemonGrid pokemons = { pokemons } />  */}
      {
        pokemons.length === 0
          ? (<NoFavorites/>)
          : (<PokemonGrid pokemons={ pokemons }/>)
      }
    </>
  )
}


export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay Favoritos</span>
    </div>
  )
}