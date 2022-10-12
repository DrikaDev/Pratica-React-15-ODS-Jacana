import React from "react";
import { Link } from "react-router-dom"
import Home from "../../Assets/Home.png"
import FotoPraça from "../../Assets/Praça.png"
import * as S from "./style"

export default function Limpeza() {
    return (
        <S.Container>
            <S.Home>
                <Link to="/"><img src={Home} alt="Desenho de casinha" />Home</Link>
            </S.Home>

            <S.Box_Objective>

                <S.Box_Banner>

                    <S.Box_Title>
                        <h3>Objetivo de Desenvolvimento Sustentável</h3>
                        <h1>1</h1>
                        <h2>Lixo urbano</h2>
                        <p>Incluir a participação da comunidade no processo de limpeza</p>
                    </S.Box_Title>

                    <S.Box_img>
                        <img src={FotoPraça} alt="Desenho de uma pracinha" />
                    </S.Box_img>

                </S.Box_Banner>

                <S.Box_Melhorias>
                    <h1>Objetivo 1 - Melhorar a limpeza nas calçadas</h1>
                    <p>1.1 Conscientizar a população que zelar pela conservação dos espaçoes públicos é um ato de cidadania</p>
                    <p>1.2 Não jogar lixo nas vias públicas</p>
                    <p>1.3 Amarrar bem os sacos plásticos</p>
                    <p>1.4 Varrer a própria calçada</p>
                    <p>1.5 Descartar o lixo apenas no dia da coleta</p>
                    <p>1.6 Fazer o descarte correto de móveis e eletrônicos</p>
                    <p>1.7 Recolher as sujeiras dos cachorros</p>
                    <p>1.8 Organizar mutirões de limpeza</p>
                </S.Box_Melhorias>

            </S.Box_Objective>
        </S.Container>
    )
}