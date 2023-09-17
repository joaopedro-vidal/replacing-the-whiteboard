import Colaborador from '../colaborador'
import './time.css'

const Time = (props) =>{
    
    const backColor = {backgroundColor: props.corPrimaria}
    const bordsColor = {borderColor: props.corSecundaria}

    return(
        (props.colaboradores.length > 0) && <section className='time' style={backColor}>
            <h3 style={bordsColor}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador
                    key={colaborador.nome}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    corDeFundo={props.corSecundaria}
                    />)}
            </div>
        </section>
    )

}

export default Time