import { Col } from "react-bootstrap";
import { DollarSign } from "react-feather";

function TransactCrypto({ transactionType, iconBackgroundColor }) {
  const iconContainerStyle = {
    backgroundColor: iconBackgroundColor,
    borderRadius: "50%",
    padding: "10px",
  };
  return (
    <Col className="shadow-lg p-3 bg-body rounded-4 px-4 align-content-center">
      <Col
        className="rounded-circle text-white text-center "
        style={iconContainerStyle}
      >
        <DollarSign />
      </Col>
      <Col>{transactionType}</Col>
    </Col>
  );
}

export default TransactCrypto;
