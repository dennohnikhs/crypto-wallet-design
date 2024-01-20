import { ChevronDown } from "bootstrap-icons-react";
import { Col, Row, Collapse } from "react-bootstrap";

import Colors from "../../constants/app-colors.contants";
import { useState } from "react";
import TransactCrypto from "./TransactCrypto";

const CryptoTypeCard = ({
  title,
  name,
  balanceInType,
  balanceUsd,
  stats,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-lg p-3 bg-body rounded-4 p-3">
      <Row className="d-flex justify-content-between mb-3">
        <Col xs="auto" className="d-flex align-items-center ">
          <div
            style={{ backgroundColor: Colors.yellow }}
            className="rounded-circle p-1"
          >
            {icon}
          </div>
          <span className="px-1 text-secondary fs-6">{title}</span>
        </Col>
        <Col xs="auto">
          <h5 className="text-secondary fs-6">{name}</h5>
        </Col>
      </Row>
      <Col className="fs-2 fw-medium text-secondary">
        {balanceInType} {name}
      </Col>
      <Row className="d-flex justify-content-between">
        <Col xs="auto" className="text-secondary fs-6 fw-medium">
          {balanceUsd}
          <span className="px-1">{"USD"}</span>
        </Col>
        <Col xs="auto">
          <span
            className="p-1 rounded-5 text-center text-white"
            style={{ backgroundColor: Colors.red }}
          >
            {stats}
          </span>
        </Col>
      </Row>
      <Col className="text-center py-3">
        <ChevronDown onClick={handleToggle} />
      </Col>
      <Collapse in={isOpen} mountOnEnter unmountOnExit>
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
      </Collapse>
    </div>
  );
};

export default CryptoTypeCard;
