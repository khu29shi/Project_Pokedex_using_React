import { Routes, Route } from "react-router-dom";
import Pokedex from "../components/Pokedex/Pokedex";
import PokemonDetails from "../components/PokemonDetails/PokemonDetails";

const CustoRoutes = () => {
  return (
    <Routes>
        <Route path="/" element = {<Pokedex/>} />
        <Route path="/pokemon/:id" element={<PokemonDetails/>} />
    </Routes>
  )
}

export default CustoRoutes
