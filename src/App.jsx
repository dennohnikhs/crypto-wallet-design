import { Col, Container, Row } from "react-bootstrap";
import Layout from "./Layouts/Layout";
import ChartCard from "./components/card/Chart";
import CryptoTypeCard from "./components/card/CryptoType";
import TransactCrypto from "./components/card/TransactCrypto";
import Button from "./components/button/Button";
import BtcLogo from "../src/assets/img/btc.png";

function App() {
  return (
    <Layout>
      <CryptoTypeCard
        title="Bitcoin"
        icon={
          <img
            src={BtcLogo}
            alt="bitcoin"
            size={10}
            className="rounded-circle"
          />
        }
        name="BTC"
        balanceInType="1000.00"
        balanceUsd="24240.00"
        stats="-2.34%"
      />
      <Container className=" p-3">
        <Row className=" p-3 justify-content-between flex-wrap overflow-hidden">
          <Col xs="auto">
            <Button label="Day" />
          </Col>

          <Col xs="auto">
            <Button label="Week" />
          </Col>
          <Col xs="auto">
            <Button label="Month" />
          </Col>
          <Col xs="auto">
            <Button label="Year" />
          </Col>
        </Row>
      </Container>
      <ChartCard
        lowestValueDollar={"4.895"}
        highestValueDollar={"5.895"}
        conversionStateValue={"3.00"}
        cryptoName={"BTC"}
      />
      <Row className="d-flex justify-content-between ">
        <Col xs="auto">
          <TransactCrypto
            iconBackgroundColor="blue"
            transactionType={"Buy BTC"}
          />
        </Col>
        <Col xs="auto">
          <TransactCrypto
            iconBackgroundColor="green"
            transactionType={"Sell BTC"}
          />
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
