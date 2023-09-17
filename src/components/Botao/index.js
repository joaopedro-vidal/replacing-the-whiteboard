import './botao.css'

function Botao(props){
    return(
        <button className='botao'>
            {props.texto}
        </button>
    )
}

export default Botao