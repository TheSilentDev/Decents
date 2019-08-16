import React from "react";
import styled from "styled-components";
import Today from "./Today/Today";
import History from "./History/History";

const Container = styled.div`
  width: 100%;
`;
const IntroText = styled.h2`
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
`;
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center
  background-color: #ffb74d;

`;

const Logo = styled.h3`
  color: #fff;
`;
const Results = styled.div``;

const ResultsInner = styled.div``;

function App() {
  return (
    <>
      <Container>
        <NavBar>
          <div>
            <Logo>DECENTS</Logo>
          </div>
        </NavBar>
      </Container>
      <Results>
        <Container>
          <IntroText>
            Decents provides real time price information about <br /> BTC,ETH and
            LTC.
          </IntroText>
        </Container>
        <ResultsInner>
          <Today />
          <History />
        </ResultsInner>
      </Results>
    </>
  );
}

export default App;
