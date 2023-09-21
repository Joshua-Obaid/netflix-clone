import styled from 'styled-components'

export const Inner = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction};
    width:100%;
    max-width:1100px;
    margin:auto;

    @media(max-width:1000px){
        flex-direction: column;
    }
`

export const Item = styled.div`
    color:white;
    border-bottom: 8px solid #222;
    padding:3.125rem 5%;
    overflow: hidden;
    display: flex;

`



export const Container = styled.section`
    font-family: sans-serif;
    background-color: black;
    
    @media(max-width:1000px){
        ${Item}:last-of-type h2{
            margin-bottom: 3.125em;
        }
    }
`
export const Title = styled.h1`
    font-size:3.125rem;
    line-height:1.2;
    margin-bottom:.16em;

    @media (max-width:600px){
        font-size: 2.2rem;
    }
    
`
export const SubTitle = styled.h2`
    font-size: 1.625rem;
    font-weight: normal;
    line-height: 1.5;

    @media(max-width:600px){
        font-size: 1.125rem;
    }
`
export const Image = styled.img`
    max-width: 100%;
    height: auto;
`
export const Pane = styled.div`
    width:50%;

    @media(max-width:1000px){
        width:100%;
        text-align: center;
        padding:0 3rem;
    }
`
