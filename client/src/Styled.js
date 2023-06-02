import styled from "styled-components";

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');
 
  display: flex;
  flex-direction: column;

  & h1 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 100px;
  }

  & h3 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 50px;
  }

  & li {
    font-family: 'Comfortaa', cursive;
    font-size: 20px;
    list-style: none;
  }

`;

export const Row = styled.div`
  display: flex;
`

export const Col = styled.div`
  flex:  ${(props) => props.size};
`