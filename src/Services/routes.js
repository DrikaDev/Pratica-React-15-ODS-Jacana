import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "../Components/Home/index"
import Limpeza from "../Components/Limpeza/index"
import Pobreza from "../Components/Pobreza/index"
import Saude from "../Components/Saude/index"
import Transito from "../Components/Transito/index"
import Transporte from "../Components/Transporte/index"

export default function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/limpeza" element={<Limpeza/>}/>
                <Route path="/pobreza" element={<Pobreza/>}/>
                <Route path="/saude" element={<Saude/>}/>
                <Route path="/transito" element={<Transito/>}/>
                <Route path="/transporte" element={<Transporte/>}/>
            </Routes>
        </Router>
    )
}
