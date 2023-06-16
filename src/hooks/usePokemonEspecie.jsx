import axios from "axios";
import { POKEMON_ESPECIE } from "../url";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const usePokemonEspecie = (onSuccess, onError) => {
  
  const [actualURL, setActualURL] = useState(POKEMON_ESPECIE)

  const getPokemonSpecies = () => {
    return axios.get(actualURL)
        .then(res => res.data)
  }


const query = useQuery(["getPokemonSpecies", actualURL], getPokemonSpecies, {
    onSuccess,
    onError,
})

const prev = () => {
    if(query.data?.previous) {
        setActualURL(query.data.previous)
    }
}
const next = () => {
    if(query.data?.next) {
        setActualURL(query.data.next)
    }
}


return {query, prev, next}
}
export default usePokemonEspecie