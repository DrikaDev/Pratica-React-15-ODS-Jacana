import React from "react";
import { Link } from "react-router-dom"
import Home from "../../Assets/Home.png"
import FotoSaude from "../../Assets/Saude.png"
import * as S from "./style"

export default function Saude() {
    return (
        <S.Container>
            <S.Home>
                <Link to="/"><img src={Home} alt="Desenho de casinha" />Home</Link>
            </S.Home>

            <S.Box_Objective>

                <S.Box_Banner>

                    <S.Box_Title>
                        <h3>Objetivo de Desenvolvimento Sustentável</h3>
                        <h1>3</h1>
                        <h2>Saúde</h2>
                        <p>Melhora no atendimento público</p>
                    </S.Box_Title>

                    <S.Box_img>
                        <img src={FotoSaude} alt="Desenho de uma pessoa da saúde" />
                    </S.Box_img>

                </S.Box_Banner>

                <S.Box_Melhorias>
                    <h1>Objetivo 3 - Melhorar o atendimento médico nos AMAS</h1>
                    <p>1.1 Acrescentar mais médicos nos AMAS</p>
                    <p>1.2 Aumentar a quantidade de remédios disponíveis à população</p>
                    <p>1.3 Melhorar o atendimento telefônico nas UPAS e nos AMAS</p>
                    <p>1.4 Melhorar os bancos de esperas</p>
                    <p>1.5 Diminuir o tempo de espera na recepção</p>
                </S.Box_Melhorias>

            </S.Box_Objective>
        </S.Container>
    )
}