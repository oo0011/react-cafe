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
      const seatColor = isSelected ? "#30A2FF" : "#D9D9D9";

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
        <h2>좌석 예약</h2>
        <p>잔여좌석 : {count}/12</p>
        <button onClick={closeModal}>X</button>
      </div>

      <div className={styles.seat_box}>
        <div className={styles.seat_h2}>
          <h2>Give MY__Seat</h2>
        </div>
        <div className={styles.tf_box}>
          <div>
            <div className={styles.true_box}></div>
            <span className={styles.tf_span}>예약 가능</span>
          </div>
          <div>
            <div className={styles.false_box}></div>
            <span className={styles.tf_span}>예약 불가</span>
          </div>
        </div>

        <div className={styles.seats_container}>{renderSeats()}</div>
        <div className={styles.modal_footer_box}>
          <p className={styles.modal_footer_span}>
            본 좌석 배치는 해당 카페 좌석 배치와 상이합니다.
          </p>
        </div>
        <button onClick={handleConfirmClick}>확인</button>
      </div>
    </div>
  );
}
export default SeatModal;
