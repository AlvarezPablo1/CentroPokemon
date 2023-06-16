import { useContext } from "react";
import { FormContext, actualizarPokemon } from "../../context/ContextoFormulario";
import style from "../../css/Input.module.css"

const Select = ({isLoading, options, value, name, onChange, label}) => {

  const { dispatch } = useContext(FormContext)

  /*Con esta funcion guardamos los datos ingresados en su respectivo "espacio" y le decimos que se muestren en el detalle del formulario una ves deseleccionamos el input */
  const onBlur = (e) => {
    e.preventDefault();
      dispatch(actualizarPokemon(e.target.name, e.target.value))
  };

  return (
    <div className={style.inputContenedor}>
      <label htmlFor={name}>{label}</label>
      <select
        value={value}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        isLoading={isLoading}>
        { isLoading || !options ? 
                    <option value={""}>Cargando...</option>
                :
                <>
                    {options.map(option => (
                        <option key={option.name} value={option.name}>{option.name}</option>
                    ))} 
                </>
            }
        </select>
    </div>
  );
}
export default Select