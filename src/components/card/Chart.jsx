import { Col, Row } from "react-bootstrap";
import CryptoChart from "../charts/walletChart";
import { Dot } from "bootstrap-icons-react";

function ChartCard({
  lowestValueDollar,
  highestValueDollar,
  conversionStateValue,
  cryptoName,
}) {
  return (
    <div className="py-2">
      <div className="shadow-lg p-3 bg-body rounded-4 p-3">
        <Row className="d-flex justify-content-between mb-5 ">
          <Col xs="auto">
            <span className="text-danger fw-bolder ">
              <Dot />
            </span>
            Lower:$
            {lowestValueDollar}
          </Col>
          <Col xs="auto">
            {" "}
            <span className="text-green fw-bolder ">
              <Dot />
            </span>
            Higher:${highestValueDollar}
          </Col>
        </Row>
        <Row>
          <CryptoChart />
        </Row>
        <Row>
          <Col xs="auto">
            <span className="text-blue fw-bolder ">
              <Dot />
            </span>
            1{cryptoName}=${conversionStateValue}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ChartCard;
