import styled from "styled-components";

export const Main = styled.main`
    background-color: #FCC30B;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
export const Box_Jacana = styled.section`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 18rem;

    h1{
        font-size: 1.5rem;
        margin-bottom: 1rem;
        padding-left: 3rem;
        width: 100%;
    }

    p{
        line-height: 2rem;
        margin: 0 auto;
        width: 90%;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        height: 23rem;
        width: 90%;

        h1{
            font-size: 1.2rem;
            padding-left: 1rem;
        }

        p{
            line-height: 1rem;
        }
    }
`
export const ContainerMenu = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    height: 12rem;

    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        height: 10rem;
    }

    li{
        border-radius: 5px;
        list-style: none;
        width: 10rem;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 1s all;

        &:hover{
            transform: scale(1.1);
            cursor: pointer;
        }

        &:nth-child(1){
            background-color: #4C9F38;
        }

        &:nth-child(2){
            background-color: #DDA63A;
        }

        &:nth-child(3){
            background-color: #E5243B;
        }

        &:nth-child(4){
            background-color: #FD6925;
        }

        &:nth-child(5){
            background-color: #00689D;
        }
    }

    a{
        align-items: center;
        color: white;
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        justify-content: center;
        height: 9rem;
        text-align: center;
        text-decoration: none;
        width: 11rem;
    }

    p{
        font-size: 1rem;
        text-transform: uppercase;
        width: 100%;
    }

    img{
        width: 6rem;
        margin-top: .5rem;   
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        height: 15rem;
        width: 90%;

        ul{
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 100%;
            height: 15rem;
        }

        li{
            width: 6rem;
            height: 6rem;
        }

        a{
            font-size: .8rem;
            height: 6rem;
            width: 6rem;
        }

        p{
        font-size: .8rem;
        }

        img{
            width: 3rem;
            margin-top: 0.3rem;   
        }
    }
`