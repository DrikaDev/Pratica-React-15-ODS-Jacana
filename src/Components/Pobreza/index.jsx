import React from "react";
import { Link } from "react-router-dom"
import Home from "../../Assets/Home.png"
import FotoMulher from "../../Assets/Pobreza.png"
import * as S from "./style"

export default function Pobreza() {
    return (
        <S.Container>
            <S.Home>
                <Link to="/"><img src={Home} alt="Desenho de casinha" />Home</Link>
            </S.Home>

            <S.Box_Objective>

                <S.Box_Banner>

                    <S.Box_Title>
                        <h3>Objetivo de Desenvolvimento Sustentável</h3>
                        <h1>2</h1>
                        <h2>Moradores de rua</h2>
                        <p>Reduzir a quantidade de moradores de rua da região.</p>
                    </S.Box_Title>

                    <S.Box_img>
                        <img src={FotoMulher} alt="Desenho de uma pessoa pobre" />
                    </S.Box_img>

                </S.Box_Banner>

                <S.Box_Melhorias>
                    <h1>Objetivo 2 - Reduzir a quantidade de moradores de rua da região</h1>
                    <p>É inegável que a cada ano mais indivíduos utilizam as ruas como moradia, fato desencadeado em 
                        decorrência de vários fatores: ausência de vínculos familiares, desemprego, violência, perda da 
                        autoestima, alcoolismo, uso de drogas, doença mental, entre outros fatores.</p>
                    <p>Haja vista também que o desinteresse do Estado influencia diretamente no comportamento da sociedade, 
                        e devem ser desenvolvidas políticas que atuem na causa do problema e não somente em 
                        serviços de distribuição de alimentos e outros objetos, proporcionando dignidade 
                        para todos os habitantes.</p>
                    <p>Enquanto isso, podemos amenizar a situação:</p>
                    <p>1.1 Leve agasalhos e cobertores com você</p>
                    <p>1.2 Doe roupas que você não usa mais</p>
                    <p>1.3 Organize um cabide solidário no bairro</p>
                    <p>1.4 Doe luvas e tocas</p>
                    <p>1.5 Não normalize a situação. Quando você encontra uma pessoa na rua, não ignore, pule ou mude de calçada. 
                        Olhe, pense, se incomode, dê bom dia… A gente precisa mudar a nossa relação com essas pessoas. (Júlia Bandeira, psicanalista e voluntária em projetos sociais)</p>

                </S.Box_Melhorias>

            </S.Box_Objective>
        </S.Container>
    )
}