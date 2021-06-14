import './App.css';
import NavBar from './Components/NavBar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <body>
              <ItemListContainer greating="ProductoA"/>
              <ItemListContainer greating="ProductoB"/>
              <ItemListContainer greating="ProductoC"/>
              <ItemListContainer greating="ProductoD"/>
      </body>
    </div>
  );
}

export default App;
