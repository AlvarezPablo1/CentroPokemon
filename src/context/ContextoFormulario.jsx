import { createContext, useReducer } from "react";


export const FormContext = createContext();


const ACTUALIZAR_ENTRENADOR = "ACTUALIZAR_ENTRENADOR"
const ACTUALIZAR_POKEMON = "ACTUALIZAR_POKEMON"


/*son los valores con los que va a iniciar el reducer, hasta que se modifique algun dato mediante el dispatch */
const initialState={
  entrenador:{},
  pokemon:{}
}

/**
 * Actualiza los valores guardados en el state del entrenador
 * @author Pablo Alvarez
 * @function
 * @param {string} name Nombre de la propiedad a modificar
 * @param {string} value Valor de la propiedad a modificar
 * @example dispatch(actualizarEntrenador("nombre": "Pablo"))
 */
export const actualizarEntrenador = (name, value) =>{
  const action ={
    type: ACTUALIZAR_ENTRENADOR,
    payload : {
      name : name,
      value: value
    }
  }
  return action
}

/**
 * Actualiza los valores guardados en el state del pokemon
 * @author Pablo Alvarez
 * @function
 * @param {string} name Nombre de la propiedad a modificar
 * @param {string} value Valor de la propiedad a modificar
 * @example dispatch(actualizarPokemon("nombrePokemon": "Pikachu"))
 */
export const actualizarPokemon = (name, value) =>{
  const action ={
    type: ACTUALIZAR_POKEMON,
    payload : {
      name : name,
      value: value
    }
  }
  return action
}

/**
 * El reducer se encarga de actualizar la informacion ya sea del entrenador o del pokemon ingresados, dependiendo del type que se haya "activado"
 * @author Pablo Alvarez
 * @function
 * @param {object} state 
 * @param {object} action Objeto que contiene tanto el TYPE como el PAYLOAD que vamos a utilizar en el reducer
 */
const reducer = (state, action) =>{
  let payload
  switch (action.type) {
    case ACTUALIZAR_ENTRENADOR:
      payload = action.payload
      return {...state, entrenador:{...state.entrenador, [payload.name]: payload.value}}
    case ACTUALIZAR_POKEMON:
      payload = action.payload
      return {...state, pokemon:{...state.pokemon, [payload.name]: payload.value}}
    default:
      break;
  }
}

export const FormContextProvider = ({children}) =>{

  const [state, dispatch] = useReducer(reducer, initialState)
  
  const values ={
      state,
      dispatch
    }

  return(
    <FormContext.Provider value={values}>{children}</FormContext.Provider>
  )
}

