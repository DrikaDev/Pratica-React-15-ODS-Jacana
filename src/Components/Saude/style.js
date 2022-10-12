import styled from "styled-components";

export const Container = styled.main`
    height: 100vh;
    width: 100%;
`

export const Home = styled.div`
    border-bottom: 4px solid #0A97D9;
    height: 2.5rem;
    padding-left: 2rem;

    img{
        width: 1.5rem;
    }

    a{
        align-items: center;
        color: black;
        display: flex;
        font-size: 1.2rem;
        height: 2.5rem;
        flex-direction: row;
        justify-content: space-around;
        text-decoration: none;
        width: 6rem;
    }
`
export const Box_Objective = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 94vh;
    width: 100%;
`
export const Box_Banner = styled.div`
    align-items: center;
    background-color: #E5243B;
    display: flex;
    flex-direction: row;
    height: 18rem;
    margin-top: 1rem;
    width: 80%;

    @media only screen and (min-width: 360px) and (max-width: 800px){
        width: 90%;
        height: 13rem;
    }
`
export const Box_Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 15rem;
    margin-left: 3rem;
    width: 60%;

    h3{
        color: white;
        font-size: 1rem;
        width: 30rem;
    }

    h1{
        color: white;
        font-size: 5rem;
        font-weight: lighter;
        width: 5rem;
    }

    h2{
        color: white;
        font-size: 2rem;
        width: 20rem;
    }

    p{
        color: white;
        font-size: 1rem;
        width: 40rem;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        margin-left: 1rem;
        height: 13rem;
        width: 55%;

        h3{
            width: 20rem;
        }

        h1{
            font-size: 3rem;
            width: 4rem;
        }

        h2{
            font-size: 1.3rem;
        }

        p{
            font-size: .9rem;
            width: 20rem;
        }
    }
`
export const Box_img = styled.figure`
    height: 15rem;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 14rem;
        height: 14rem;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        height: 8rem;

        img{
            width: 7rem;
            height: 7rem;
        }
    }
`
export const Box_Melhorias = styled.div`
    display: flex;
    flex-direction: column;
    height: 30rem;
    padding-left: 3rem;
    padding-right: 3rem;
    width: 80%;

    h1{
        font-size: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    p{
        line-height: 1.5rem;
        font-size: 1rem;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        padding-left: 0;
        padding-right: 0;
        width: 90%;

        h1{
            font-size: 1.3rem;
        }
    }
`