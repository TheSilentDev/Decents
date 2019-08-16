import React from "react";
import styled from "styled-components";
import Today from "./Today/Today";
import History from "./History/History";

const Wrapper = styled.div``;
const TopHeader = styled.div``;
const Container = styled.div``;
const IntroText = styled.h2`
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
`;
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffb74d;
  padding: 15px 20px;
`;
const Results = styled.div``;

const ResultsInner = styled.div``;

function App() {
  return (
    <>
      <Container>
        <NavBar>
          <div>
            <span>Decents</span>
          </div>
          <div>
            <a
              href="https://pusher.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pusher.com
            </a>
          </div>
        </NavBar>
      </Container>
      <Results>
        <Container>
          <IntroText>
            Decents is a realtime price information about <br /> BTC,ETH and
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
