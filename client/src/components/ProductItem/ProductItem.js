import styled from 'styled-components'

export const Image = styled.img`
    max-width: 500px;
    display: block;
    margin: 2px auto;
`

export const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 20px auto;
    & button {
        width: 200px;
    }
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;   
    align-items: center; 
`

export const Price = styled.span`
    font-family: "Bebas Neue", sans-serif;
    font-size: 30px;
    font-weight: bold;
    margin: 20px;
`