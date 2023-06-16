import React, { useContext } from "react";
import { FormContext } from "../../context/ContextoFormulario";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { POST_FORM } from "../../url";
import { useNavigate } from "react-router-dom";
import style from "../../css/Detalle.module.css"
const Detalle = () => {

  /* Nos traemos la informacion almacenada en el contexto, para mostrarla en el detalle del formulario*/
  const {state} = useContext(FormContext)

  const mutation = useMutation((state) => {
    return axios.post(POST_FORM, {
      state
    })
    .then(res => console.log(res));
  })

  return (
    <div className={style.detalleFormulario}>
      <div className={style.encabezado}>
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className={style.datosCliente}>
        <h4>Datos del Entrenador</h4>
        <div className={style.fila}>
          <p>Nombre:{state.entrenador.nombre}</p>
          <p>Apellido:{state.entrenador.apellido}</p>
          <p>Email:{state.entrenador.email}</p>
        </div>
      </section>
      <section className={style.datosCliente}>
        <h4>Datos del Pokémon</h4>
        <div className={style.fila}>
          <p>Nombre:{state.pokemon.nombrePokemon}</p>
          <p>Especie:{state.pokemon.especiePokemon}</p>
          <p>Tipo:{state.pokemon.tipoPokemon}</p>
          <p>Altura:{state.pokemon.alturaPokemon}</p>
          <p>Edad:{state.pokemon.edadPokemon}</p>
          
        </div>
      </section>
        <button className={style.botonEnviar} onClick={() => {mutation.mutate(state)}}>
            {mutation.isLoading ? ("enviando") : ("enviar solicitud") }
          </button>
    </div>
  );
};

export default Detalle;
