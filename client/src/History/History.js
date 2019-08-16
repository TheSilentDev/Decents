import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import styled from "styled-components";

const HistorySection = styled.div`
  margin-bottom: 40px;
  padding: 0 50px;
`;

const HistoryText = styled.h2`
  color: rgba(0, 0, 0, 0.7);
`;

const HistoryBox = styled.div`
  padding: 20px 50px;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 3px 3px 5px 6px #ccc; /* Firefox 3.5 - 3.6 */
  box-shadow: 3px 3px 5px 6px #ccc; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
`;

const HistoryItem = styled.div``;

const Columns = styled.div`
  padding: 20px 0;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Column = styled.div`
  width: 100%;
  text-align: center;
  color: rgba(0,0,0,0.8)
`;

class History extends Component {
  constructor() {
    super();
    this.state = {
      todayprice: {},
      yesterdayprice: {},
      twodaysprice: {},
      threedaysprice: {},
      fourdaysprice: {}
    };
  }

  getETHPrices = date => {
    return axios.get(
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=" +
        date
    );
  };
  // This function gets the BTC price for a specific timestamp/date. The date is passed in as an argument
  getBTCPrices = date => {
    return axios.get(
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=" +
        date
    );
  };
  // This function gets the LTC price for a specific timestamp/date. The date is passed in as an argument
  getLTCPrices = date => {
    return axios.get(
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts=" +
        date
    );
  };

  getTodayPrice() {
    // Get today's date in timestamp
    let t = moment().unix();
    // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
    axios
      .all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(
        axios.spread((eth, btc, ltc) => {
          let f = {
            date: moment.unix(t).format("MMMM Do YYYY"),
            eth: eth.data.ETH.USD,
            btc: btc.data.BTC.USD,
            ltc: ltc.data.LTC.USD
          };
          // Set the state of todayprice to the content of the object f
          this.setState({ todayprice: f });
        })
      );
  }
  // This function gets the prices for the yesterday.
  getYesterdayPrice() {
    // Get yesterday's date in timestamp
    let t = moment()
      .subtract(1, "days")
      .unix();
    // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
    axios
      .all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(
        axios.spread((eth, btc, ltc) => {
          let f = {
            date: moment.unix(t).format("MMMM Do YYYY"),
            eth: eth.data.ETH.USD,
            btc: btc.data.BTC.USD,
            ltc: ltc.data.LTC.USD
          };
          // Set the state of yesterdayprice to the content of the object f
          this.setState({ yesterdayprice: f });
        })
      );
  }
  // This function gets the prices for the two days ago.
  getTwoDaysPrice() {
    // Get the date for two days ago in timestamp
    let t = moment()
      .subtract(2, "days")
      .unix();
    // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
    axios
      .all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(
        axios.spread((eth, btc, ltc) => {
          let f = {
            date: moment.unix(t).format("MMMM Do YYYY"),
            eth: eth.data.ETH.USD,
            btc: btc.data.BTC.USD,
            ltc: ltc.data.LTC.USD
          };
          // Set the state of twodaysprice to the content of the object f
          this.setState({ twodaysprice: f });
        })
      );
  }
  // This function gets the prices for the three days ago.
  getThreeDaysPrice() {
    // Get the date for three days ago in timestamp
    let t = moment()
      .subtract(3, "days")
      .unix();
    // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
    axios
      .all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(
        axios.spread((eth, btc, ltc) => {
          let f = {
            date: moment.unix(t).format("MMMM Do YYYY"),
            eth: eth.data.ETH.USD,
            btc: btc.data.BTC.USD,
            ltc: ltc.data.LTC.USD
          };
          // Set the state of threedaysprice to the content of the object f
          this.setState({ threedaysprice: f });
        })
      );
  }
  // This function gets the prices for the four days ago.
  getFourDaysPrice() {
    // Get the date for four days ago in timestamp
    let t = moment()
      .subtract(4, "days")
      .unix();
    // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
    axios
      .all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(
        axios.spread((eth, btc, ltc) => {
          let f = {
            date: moment.unix(t).format("MMMM Do YYYY"),
            eth: eth.data.ETH.USD,
            btc: btc.data.BTC.USD,
            ltc: ltc.data.LTC.USD
          };
          // Set the state of fourdaysprice to the content of the object f
          this.setState({ fourdaysprice: f });
        })
      );
  }
  // This is called when an instance of a component is being created and inserted into the DOM.
  componentWillMount() {
    this.getTodayPrice();
    this.getYesterdayPrice();
    this.getTwoDaysPrice();
    this.getThreeDaysPrice();
    this.getFourDaysPrice();
  }
  render() {
    return (
      <HistorySection>
        <HistoryText>History (Past 5 days)</HistoryText>
        <HistoryBox>
          <HistoryItem>
            <h4>{this.state.todayprice.date}</h4>
            <Columns>
              <Column>
                <p>1 BTC = ${this.state.todayprice.btc}</p>
              </Column>
              <Column>
                <p>1 ETH = ${this.state.todayprice.eth}</p>
              </Column>
              <Column>
                <p>1 LTC = ${this.state.todayprice.ltc}</p>
              </Column>
            </Columns>
          </HistoryItem>
          <HistoryItem>
            <h4>{this.state.yesterdayprice.date}</h4>
            <Columns>
              <Column className="column">
                <p>1 BTC = ${this.state.yesterdayprice.btc}</p>
              </Column>
              <Column className="column">
                <p>1 ETH = ${this.state.yesterdayprice.eth}</p>
              </Column>
              <Column className="column">
                <p>1 LTC = ${this.state.yesterdayprice.ltc}</p>
              </Column>
            </Columns>
          </HistoryItem>
          <HistoryItem>
            <h4>{this.state.twodaysprice.date}</h4>
            <Columns className="columns">
              <Column className="column">
                <p>1 BTC = ${this.state.twodaysprice.btc}</p>
              </Column>
              <Column className="column">
                <p>1 ETH = ${this.state.twodaysprice.eth}</p>
              </Column>
              <Column className="column">
                <p>1 LTC = ${this.state.twodaysprice.ltc}</p>
              </Column>
            </Columns>
          </HistoryItem>
          <HistoryItem className="history--section__box__inner">
            <h4>{this.state.threedaysprice.date}</h4>
            <Columns className="columns">
              <Column className="column">
                <p>1 BTC = ${this.state.threedaysprice.btc}</p>
              </Column>
              <Column className="column">
                <p>1 ETH = ${this.state.threedaysprice.eth}</p>
              </Column>
              <Column className="column">
                <p>1 LTC = ${this.state.threedaysprice.ltc}</p>
              </Column>
            </Columns>
          </HistoryItem>
          <HistoryItem className="history--section__box__inner">
            <h4>{this.state.fourdaysprice.date}</h4>
            <Columns className="columns">
              <Column className="column">
                <p>1 BTC = ${this.state.fourdaysprice.btc}</p>
              </Column>
              <Column className="column">
                <p>1 ETH = ${this.state.fourdaysprice.eth}</p>
              </Column>
              <Column className="column">
                <p>1 LTC = ${this.state.fourdaysprice.ltc}</p>
              </Column>
            </Columns>
          </HistoryItem>
        </HistoryBox>
      </HistorySection>
    );
  }
}

export default History;
