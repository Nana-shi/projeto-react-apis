import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home/Home"
import Pokedex from "../pages/Pokedex/Pokedex"
import Details from "../pages/Details/Details"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

function Router() {

return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/pokedex" element={<Pokedex/>}/>
                <Route path="/:PokemonName" element={<Details/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>   
    );
  }
  
  export default Router