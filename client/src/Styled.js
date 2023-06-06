import styled from "styled-components";

export const Container = styled.div`

 
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  font-family: 'Comfortaa', cursive;

  & h1 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 100px;
  }

  & h3 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 50px;
  }

  & li { 
    font-size: 20px;
    list-style: none;
  }

  & a {
    color: inherit;
    &:hover {
      color: #217262;
    }
  }

  & button {
    font-family: 'Comfortaa', cursive;
    font-size: 20px;
    background: #217262;
    border-radius: 10px;
    border: 0px;
    color: white;
    margin: 5px;
    padding: 10px;
    &:hover {
      cursor: pointer;
      background: #5DB7A5;
    }
  }

`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`

export const HomeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Col = styled.div`
  flex:  ${(props) => props.size};
`