import './App.css';
import NavBar from './Components/NavBar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <body>
        <ItemListContainer greating="Hola"/>
        <ItemCount/>
        <ItemListContainer greating="Hola1"/>
        <ItemCount/>
        <ItemListContainer greating="Hola2"/>
        <ItemCount/>
        <ItemListContainer greating="Hola3"/>
        <ItemCount/>
      </body>
    </div>
  );
}

export default App;
