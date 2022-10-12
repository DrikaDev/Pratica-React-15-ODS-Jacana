import React from "react";
import { Link } from "react-router-dom"
import Home from "../../Assets/Home.png"
import FotoSemaforo from "../../Assets/Transporte.png"
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
                        <h1>5</h1>
                        <h2>Transporte público</h2>
                        <p>Melhorar a qualidade do transporte</p>
                    </S.Box_Title>

                    <S.Box_img>
                        <img src={FotoSemaforo} alt="Desenho de onibus" />
                    </S.Box_img>

                </S.Box_Banner>

                <S.Box_Melhorias>
                    <h1>Objetivo 5 - Melhorar a qualidade do transporte público</h1>
                    <p>1.1 Redução do preço da passagem</p>
                    <p>1.2 Extensão do metrô da estação Tucuruvi até o Jaçanã</p>
                    <p>1.3 Mais ônibus disponíveis nos horários de pico para dar conta do volume de pessoas</p>
                    <p>1.4 Mais linhas de ônibus para outras direções evitando assim ter que fazer baldeações</p>
                    <p>1.5 Motoristas mais educados, pacientes e que dirijam com mais cautela</p>
                    <p>1.6 Manutenção preventiva nos veículos</p>
                </S.Box_Melhorias>

            </S.Box_Objective>
        </S.Container>
    )
}