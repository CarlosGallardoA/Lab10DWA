import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Counter, Table } from "./components";
import Navigation from "./components/navigation";
import { Pokemons } from "./pages";
import Home from "./pages/Home";

function App() {
  const datos = [
    {
      nombre: "Juan",
      apellido: "Perez",
      celular: "123456789",
      correo: "jaun@perez.com",
    },
    {
      nombre: "Pedro",
      apellido: "Perez",
      celular: "123456789",
      correo: "pedro@juan.com",
    },
  ];
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contador"
            element={<Counter text1={"Sumar"} text2={"Restar"} />}
          />
          <Route path="/table" element={<Table datos={datos} />} />
          <Route path="/pokedex" element={<Pokemons />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
