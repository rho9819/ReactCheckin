import React, { useState } from "react";
import "../Modal/modal.css";
import Map from "../Map/map.jsx";
import Button from "../Button/Button.jsx";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [attendanceText, setAttendanceText] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const toggleText = () => {
    setAttendanceText((prevAttendanceText) => !prevAttendanceText);
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <div className="modal_background">
            <div className="modal_close" onClick={closeModal}>
              X
            </div>
            <Map />
            <Button onClick={toggleText} name="button" type="button">
              {attendanceText ? "출근하기" : "퇴근하기"}
            </Button>
          </div>
        </div>
      )}

      {!isModalOpen && (
        <div>
          <Button onClick={openModal} name="button" type="button">
            모달 열기
          </Button>
        </div>
      )}
    </>
  );
}

export default Modal;