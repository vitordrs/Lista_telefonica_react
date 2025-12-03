import BotaoAdicionar from '../../componentes/BotaoAdicionar/botaoAdicionar'
import Lateral from '../../containers/Lateral'
import ListaDeContatos from '../../containers/ListaDeContato'

const Home = () => {
  return (
    <>
      <Lateral mostrarFiltros />
      <ListaDeContatos />
      <BotaoAdicionar />
    </>
  )
}

export default Home
