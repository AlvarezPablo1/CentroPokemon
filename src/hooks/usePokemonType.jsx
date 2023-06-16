import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { POKEMON_TYPES } from "../url"

const usePokemonType = () => {
  const  getPokemonTypes = () =>{
  return  axios.get(POKEMON_TYPES)
      .then(res => res.data)
  }

  const query = useQuery(["getPokemonTypes"], getPokemonTypes);

  return query
}
export default usePokemonType