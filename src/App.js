import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Former';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome:'Bulky Outbound',
      corPrimaria:'#4fa8fb',
      corSecundaria:'#1d3d33'
    },
    {
      nome:'Bulky Inbound',
      corPrimaria:'#759eff',
      corSecundaria:'#3f8880'
    },
    {
      nome:'Bulky B2C',
      corPrimaria:'#75c7ff',
      corSecundaria:'#223026'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario
         times={times.map(time => time.nome)} 
         aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

    </div>
  );
}

export default App;
