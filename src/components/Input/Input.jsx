import React, { useContext} from "react";
import { FormContext, actualizarEntrenador, actualizarPokemon } from "../../context/ContextoFormulario";
import style from "../../css/Input.module.css"

/**
 * 
 * @param {object} props
 * @param {string} props.value Valor del input
 * @param {function} props.onChange Función onChange del input, para manejar el estado
 * @param {string} props.name `name` del input, también define el `id`
 * @param {string=} props.label Texto descriptivo del input
 * @param {string=} props.type Tipo del input, por defecto `text`
 * @param {boolean=} props.required
 * 
 */
const Input = ({ value, name, onChange, onClick, children,  label, type = "text" }) => {

  const { dispatch } = useContext(FormContext)

  /*Con esta funcion guardamos los datos ingresados en su respectivo "espacio" y le decimos que se muestren en el detalle del formulario una ves deseleccionamos el input */
  const onBlur = (e) => {
    e.preventDefault();
    if(e.target.name.includes("Pokemon")){
      dispatch(actualizarPokemon(e.target.name, e.target.value))
    }else{
      dispatch(actualizarEntrenador(e.target.name, e.target.value))
    }
  };

  return (
    <div className={style.inputContenedor}>
      <label htmlFor={name}>{label}</label>
      <input
        onClick={onClick}
        type={type}
        name={name}
        value={value}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      {children}
    </div>
  );
};

export default Input;
