import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './former.css'

function Formulario(props){

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Fill out the form to create the staff member card</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Name" 
                    placeholder="Type your name"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                /> 
                <CampoTexto 
                    obrigatorio={true} 
                    label="Position" 
                    placeholder="Type your position"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                /> 
                <CampoTexto 
                    label="Image" 
                    placeholder="Type the adress of your image"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                /> 
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Team" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao texto="Create card"/>
            </form>
        </section>
    )
}

export default Formulario