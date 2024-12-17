import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importando as pages
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

//Importando componentes
import Header from "./componentes/Header";
import Slide from "./componentes/Slide";


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/sobre" element={ <Sobre /> }/>
            </Routes>
        </BrowserRouter>   
    )
}

export default RoutesApp;