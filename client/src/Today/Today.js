import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const TodaySection = styled.div`
  margin-bottom: 40px;
  padding: 0 50px;
`;

const CurrentPrice = styled.h2`
  color: rgba(0, 0, 0, 0.7);
`;

const Columns = styled.div`
  padding: 20px 0;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 3px 3px 5px 6px #ccc; /* Firefox 3.5 - 3.6 */
  box-shadow: 3px 3px 5px 6px #ccc; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
`;

const Price = styled.h2`
  color: rgba(0, 0, 0, 0.7);
`;

const Conversion = styled.p`
  color: rgba(0,0,0,0.5)
  font-size: 1.1rem;
`;
const Column = styled.div`
  width: 100%;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.4);
`;

class Today extends Component {
  constructor() {
    super();
    this.state = {
      btcprice: "",
      ltcprice: "",
      ethprice: ""
    };
  }

  componentWillMount() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD"
      )
      .then(response => {
        // We set the latest prices in the state to the prices gotten from Cryptocurrency.
        this.setState({ btcprice: response.data.BTC.USD });
        this.setState({ ethprice: response.data.ETH.USD });
        this.setState({ ltcprice: response.data.LTC.USD });
      })
      // Catch any error here
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <TodaySection>
        <CurrentPrice>Current Price</CurrentPrice>
        <Columns>
          <Column>
            <Price>${this.state.btcprice}</Price>
            <Conversion>1 BTC</Conversion>
          </Column>
          <Column>
            <Price>${this.state.ethprice}</Price>
            <Conversion>1 ETH</Conversion>
          </Column>
          <Column>
            <Price>${this.state.ltcprice}</Price>
            <Conversion>1 LTC</Conversion>
          </Column>
        </Columns>
      </TodaySection>
    );
  }
}

export default Today;
