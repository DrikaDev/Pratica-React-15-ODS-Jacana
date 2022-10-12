import React from "react";
import { Link } from "react-router-dom"
import Home from "../../Assets/Home.png"
import FotoTransito from "../../Assets/Carros.png"
import * as S from "./style"

export default function Transito() {
    return (
        <S.Container>
            <S.Home>
                <Link to="/"><img src={Home} alt="Desenho de casinha" />Home</Link>
            </S.Home>

            <S.Box_Objective>

                <S.Box_Banner>

                    <S.Box_Title>
                        <h3>Objetivo de Desenvolvimento Sustentável</h3>
                        <h1>4</h1>
                        <h2>Trânsito nas ruas</h2>
                        <p>Desafogamento do fluxo de veículos nos horarios de pico</p>
                    </S.Box_Title>

                    <S.Box_img>
                        <img src={FotoTransito} alt="Desenho de carros"/>
                    </S.Box_img>

                </S.Box_Banner>

                <S.Box_Melhorias>
                    <h1>Objetivo 4 - Reduzir o trânsito na Avenida Guapira</h1>
                    <p>Com o crescimento populacional do Jaçanã nas década de 80 e 90, surgiram bairros ao redor da região, 
                        entre eles o Jova Rural, Jardim Hebron, Jardim Felicidade e Vila Nova Galvão. Junto com este boom populacional, 
                        vieram os problemas de toda a metrópole: o trânsito.</p>
                    <p>1.1 Criação de praças para permitir a circulação dos veículos em forma rotatória</p>
                    <p>1.2 Alargamento de ruas estreitas para desafogar outras ruas</p>
                    <p>1.3 Criação de ruas estrategicamente planejadas</p>
                    <p>1.4 Estes procedimentos já foram realizados, porém o trânsito continua, principalmente as 6º feiras.</p>
                </S.Box_Melhorias>

            </S.Box_Objective>
        </S.Container>
    )
}