import usePokemonType from "../../hooks/usePokemonType"
import Select from "./Select"


const SelectType = ({value, onChange}) => {
  const {data, isLoading} = usePokemonType()
  return(
    <Select
    isLoading={isLoading}
    options={data?.results}
    value={value}
    name="tipoPokemon"
    onChange={onChange}
    label="tipo"
    />
  )
}
export default SelectType