import styled from "styled-components";

export const Container = styled.div`
  display : flex;
  flex-direction: row;
  margin: .5em 1.7em;

  .text{
    font-size: .8em;
    font-weight: lighter;
    margin-right: .2em;
  }

  @media(max-width:1024px) {
    flex-wrap: wrap;
  }
`