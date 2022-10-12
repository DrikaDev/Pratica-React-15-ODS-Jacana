import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Limpeza from "../../Assets/Praça.png"
import Pobreza from "../../Assets/Pobreza.png"
import Saude from "../../Assets/Saude.png"
import Transito from "../../Assets/Carros.png"
import Onibus from "../../Assets/Transporte.png"
import * as S from "./style"

export default function Components() {
    return (
        <S.Main>
            <S.Box_Jacana>
            <h1>Os Objetivos de Desenvolvimento Sustentável no Jaçanã</h1>
                <div>
                    <p>Jaçanã é um distrito situado na zona norte do município de São Paulo, pertencente à Subprefeitura de Jaçanã/Tremembé.
                    É em grande parte residencial e é circundado pela Serra da Cantareira e pela cidade de Guarulhos.
                    Ficou célebre na canção Trem das onze de Adoniran Barbosa pois seus versos fazem referência ao Tramway da Cantareira, cujo Ramal de Guarulhos que ia do Carandiru até Cumbica operou até 1965 com uma estação no distrito.</p>
                    <p>No dia 14 de Setembro o bairro do Jaçanã completou 152 anos de grandes evoluções prósperas que a cada ano vem sido incrementadas na região.
                    Porém, ainda sim existem muitas coisas a serem melhoradas neste distrito tais como:</p>
                </div>
            </S.Box_Jacana>
            <S.ContainerMenu>
                <ul>
                    <li>
                        <Link to="/limpeza"><p>1 Lixo Urbano</p>
                        <img src={Limpeza} alt="Desenho de pracinha"/></Link>
                    </li>
                    <li>
                        <Link to="/pobreza"><p>2 Morador de rua</p>
                        <img src={Pobreza} alt="Desenho de uma moradora de rua"/></Link>
                    </li>
                    <li>
                        <Link to="/saude"><p>3 Saúde</p>
                        <img src={Saude} alt="Desenho de profissional da saúde"/></Link>
                    </li>
                    <li>
                        <Link to="/transito"><p>4 Trânsito</p>
                        <img src={Transito} alt="Desenho de carros"/></Link>
                    </li>
                    <li>
                        <Link to="/transporte"><p>5 Transporte</p>
                        <img src={Onibus} alt="Desenho de um ônibus"/></Link>
                    </li>
                </ul>
            </S.ContainerMenu>
        </S.Main>
    )
}