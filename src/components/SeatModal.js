import { useState } from "react";
import styles from "../css.modules/SeatModal.module.css";

function SeatModal({ setModalOpen }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [count, setCount] = useState(0);

  const handleSeatClick = (seatId) => {
    let updatedSeats;

    if (selectedSeats.includes(seatId)) {
      updatedSeats = selectedSeats.filter(
        (selectedSeat) => selectedSeat !== seatId
      );
    } else {
      updatedSeats = [...selectedSeats, seatId];
    }

    setSelectedSeats(updatedSeats);
  };

  const handleConfirmClick = () => {
    setCount(selectedSeats.length);
  };

  const renderSeats = () => {
    const seats = [];
    for (let i = 1; i <= 12; i++) {
      const seatId = i;
      const isSelected = selectedSeats.includes(seatId);
      const seatColor = isSelected ? "blue" : "white";

      seats.push(
        <div
          key={seatId}
          className={styles.seat_select_box}
          style={{ backgroundColor: seatColor }}
          onClick={() => handleSeatClick(seatId)}
        >
          <span className="seat-number">{seatId}</span>
        </div>
      );
    }
    return seats;
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.modal_box}>
      <div className={styles.button_box}>
        <span>좌석 예약</span>
        <button onClick={closeModal}>X</button>
      </div>

      <div className={styles.seat_box}>
        <div className={styles.tf_box}>
          <div className={styles.true_box}></div>
          <span>예약 가능</span>
          <br />
          <div className={styles.false_box}></div>
          <span>예약 불가</span>
        </div>

        <div className={styles.seats_container}>{renderSeats()}</div>
        <button onClick={handleConfirmClick}>확인</button>
      </div>
    </div>
  );
}
export default SeatModal;
