import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import SelectType from "../Select/SelectType";
import style from "../../css/Formulario.module.css"
import InputEspecie from "../inputEspecies/InputEspecie";
import { FormContext } from "../../context/ContextoFormulario";

const Formulario = () => {

  const initalState = {
    nombre: "",
    apellido: "",
    email: "",
    nombrePokemon: "",
    especiePokemon:"",
    tipoPokemon: "",
    alturaPokemon: "",
    edadPokemon: "",
}
  const {state, dispatch} = useContext(FormContext)
  const [formState, setFormState] = useState(initalState)

  const onChange = (e) => {
    setFormState(state => ({...state, [e.target.name]: e.target.value}))
};



  return (
    <>
      <header className={style.formHeader}>
        <div>
          <Link to="/" className={style.volver}>
            <img src={pokebola} alt="pokebola" />
            <h2>Centro Pokemon de Ash</h2>
          </Link>
        </div>
      </header>
      <div className={style.formularioIngreso}>
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className={style.cuerpoFormulario}>
          <div className={style.inputs}>
            <div>
              <p className={style.nombreSeccion}>
                <img src={entrenador} alt="entrenador" />
                <span>ENTRENADOR</span>
              </p>
              <Input value={formState.nombre} onChange={onChange} name="nombre" label="Nombre" />
              <Input value={formState.apellido} onChange={onChange} name="apellido" label="Apellido" />
              <Input value={formState.email} onChange={onChange} name="email" label="Email" type="email" />
            </div>
            <div>
              <p className={style.nombreSeccion}>
                <img src={pikachu} alt="pikachu" />
                <span>POKEMON</span>
              </p>
              <Input value={formState.nombrePokemon} onChange={onChange} name="nombrePokemon" label="Nombre" />
              <InputEspecie onChange={onChange} value={formState.especiePokemon} />
              <SelectType value={formState.tipoPokemon} onChange={onChange}/>
              <Input value={formState.alturaPokemon} onChange={onChange} name="alturaPokemon" label="altura" />
              <Input value={formState.edadPokemon} onChange={onChange} name="edadPokemon" label="edad" />
              
            </div>
          </div>
          <Detalle />
        </div>
      </div>
    </>
  );
};

export default Formulario;
