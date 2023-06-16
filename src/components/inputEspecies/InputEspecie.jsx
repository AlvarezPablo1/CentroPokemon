import React, {  useContext, useState } from 'react'
import Input from '../Input/Input'
import { FormContext, actualizarPokemon } from '../../context/ContextoFormulario'
import usePokemonEspecie from '../../hooks/usePokemonEspecie'
import styles from "../../css/InputEspecie.module.css"

const InputEspecie = ({ value, onChange }) => {
    const { dispatch } = useContext(FormContext)
    const [show, setShow] = useState(false)

    const closeSelect = () => {
        setShow(false)
    }

    const openSelect = (e) => {
        setShow(true)
    }

    const selectPokemon = (pokemon) => {
        const fakeEvent = { target: { name: 'especiePokemon', value: pokemon } }
        onChange(fakeEvent)
        dispatch(actualizarPokemon(fakeEvent.target.name, fakeEvent.target.value))
        closeSelect()
    }

    const inputOnChange = (e) => {
        e.preventDefault()
    }

    const { query, prev, next } = usePokemonEspecie()

    return (
        <>
            <Input className={styles.input} onClick={openSelect} name='especiePokemon' onChange={inputOnChange} value={value} label='Especie:' required={true}>
                <div className={`${styles.popup} ${!show ? styles.hidePopup : ""}`}>
                    <h4>Selecciona la especie...</h4>
                    {
                        query.data?.results ?
                            <section className={styles.pokemonList}>
                                {query.data?.results?.map(pokemon => (
                                    <article key={pokemon.name}>
                                        <button title={pokemon.name} onClick={() => selectPokemon(pokemon.name)} type='button'>
                                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[pokemon.url.split('/').length - 2]}.png`} alt="" />
                                        </button>
                                    </article>
                                ))}
                            </section>
                            :
                            <section className={styles.loading}>
                                <p>Cargando...</p>
                            </section>
                    }
                    <span className={styles.pageButtons}>
                        <button disabled={query.data?.previous == null} onClick={prev} type='button' className='button primary-button'>{"<"}</button>
                        {/* <button className='button primary-button'>{"Confirmar"}</button> */}
                        <button disabled={query.data?.next == null} onClick={next} type='button' className='button primary-button'>{">"}</button>
                    </span>
                </div>
            </Input>
            <div onClick={closeSelect} className={`${styles.overlay} ${!show ? styles.hideOverlay : ""}`}></div>
        </>
    )
};

export default InputEspecie;