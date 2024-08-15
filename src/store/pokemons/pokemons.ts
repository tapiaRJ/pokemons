//rxslice
// import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

/* 
  {
    '1': { id 1, name: 'bulbasaur' }
    '2': { id 1, name: 'bulbasaur' }
  }
 */

  interface PokemonsState {
    [Key: string]: SimplePokemon;
  }

  const getInitialState = (): PokemonsState => {
    const favorites = JSON.parse( localStorage.getItem('Favorite-pokemons') ?? '{}' );
    return favorites;
  }



const initialState: PokemonsState = {
  ...getInitialState(),
/* '1': { id: '1', name: 'bulbasaur' },
'3': { id: '3', name: 'venesaur' },
'5': { id: '5', name: 'Charmeleon' }, */
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toogleFavorite( state, action: PayloadAction<SimplePokemon>) {
      
      const pokemon = action.payload;
      const { id } = pokemon;

      if ( !!state[id] ) {
        delete state[id];
        // return;
      }else{
        state[id] = pokemon; // sino existe agrega
      }
      //TODO: Nose debe hacer en redux
      localStorage.setItem('favorite-pokemons',JSON.stringify( state ) );

     

    }
  }
});

export const { toogleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer