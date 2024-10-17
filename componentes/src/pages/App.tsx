import { Lista } from "../components/Lista"
import { Produto } from "../components/Produto";

function App() {
  const tecnologias = [
    'react',
    'node',
    'javascript'
  ];
  const livros = [
    'Os miseráveis',
    'A hora da estrela',
    'Grande sertão: veredas'
  ];
  const ProdutoQueSeraMostrado = 1;
  const carregando = true;
  return (
    <>
      <Lista title="tecnologias" items={tecnologias} />
      <Lista title="livros" items={livros} />
      {carregando && <h1>Carregando</h1>}
      {ProdutoQueSeraMostrado == 1 ?
        <Produto>
          <h1>Produto 1</h1>
          <h1>R$ 1000</h1>
          <button>Comprar</button>
        </Produto>
        : <Produto>
          <h1>Produto 2</h1>
          <h1>R$ 1000</h1>
          <button>Comprar</button>
        </Produto>}
    </>
  )
}

export default App
