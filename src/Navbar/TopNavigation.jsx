import { useState } from "react";
import { Container } from "react-bootstrap";
import {
  ChevronLeft,
  ThreeDotsVertical,
  Pencil,
  InfoCircle,
  Share,
  Trash,
} from "bootstrap-icons-react";

function TopNavigation() {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Container className="d-flex justify-content-between">
      <ChevronLeft size={24} />
      <h3>Bitcoin Wallet</h3>
      <div>
        <ThreeDotsVertical size={24} onClick={handleModalOpen} />
        {showModal && (
          <div
            className="position-fixed start-80 translate-middle-x bg-white border rounded shadow-sm p-3 "
            style={{ width: "200px", height: "150px" }}
          >
            <div className="border border-0 d-flex justify-content-between">
              <div>Edit</div>
              <Pencil size={20} className="me-2" />
            </div>
            <div
              onClick={handleModalClose}
              className="border border-0 d-flex justify-content-between"
            >
              <div className="border border-0 d-flex justify-content-between">
                Courier Info
              </div>
              <InfoCircle size={20} className="me-2" />
            </div>
            <div
              onClick={handleModalClose}
              className="border border-0 d-flex justify-content-between"
            >
              <div className="border border-0 d-flex justify-content-between">
                Share
              </div>
              <Share size={20} className="me-2" />
            </div>
            <div
              onClick={handleModalClose}
              className="border border-0 d-flex justify-content-between"
            >
              <div className="border border-0 d-flex justify-content-between">
                Remove
              </div>
              <Trash size={20} className="me-2" />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default TopNavigation;
