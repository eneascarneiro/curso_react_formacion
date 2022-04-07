import logo from './logo.svg';
import './App.css';
import ComponenteClase from './components/componente1/componente1';

const Componentesfuncionales=()=>
{
    return (<h1>¡Mensaje de bienvenida!</h1>);
}

// Navbar Component
const Navbar=()=>
{
    return (<h1>This is Navbar.</h1>)
}
 
// Sidebar Component
const Sidebar=()=> {
    return (<h1>This is Sidebar.</h1>)
}
 
// Article list Component
const ArticleList=()=>
{
    return (<h1>This is Articles List.</h1>)
}
 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ejemplos react componentes</h1>
      </header>
      <Componentesfuncionales />
      <ComponenteClase />
      <Navbar />
                <Sidebar />
                <ArticleList />
    </div>
  );
}

export default App;
