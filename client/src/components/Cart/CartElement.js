import styled from 'styled-components'

export const CartCard = styled.div`
    position: fixed;
    top: 20;
    left: 0;
    min-width: 20%;
    max-width: 30%;
    max-height: 60%;
    background-color: white;
    overflow: auto;
    padding: .5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, .5);
    border-radius: 10px;
`

export const CartClose = styled.div`
    position: absolute;
    top: .5rem;
    right: .5rem;
    cursor: pointer;
    color: ;
    &:hover {
        text-decoration: underline;
    }
`

export const CartClosed = styled.div`
    font-size: 25px;
    cursor: pointer;
    color: grey;
    &:hover {
        color: #217262;
    }
`
