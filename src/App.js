import './App.css';
import NavBar from './Components/NavBar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <div>
              <ItemListContainer greating="ProductoA"/>
              <ItemListContainer greating="ProductoB"/>
              <ItemListContainer greating="ProductoC"/>
              <ItemListContainer greating="ProductoD"/>
      </div>
    </div>
  );
}

export default App;
