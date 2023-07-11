import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../css.modules/Detail.module.css";
import SeatModal from "../components/SeatModal";
const Detail = ({ neighborhoodCafes, popularCafes, quietCafes }) => {
  const { id } = useParams();

  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  const cafe = neighborhoodCafes.find((cafe) => cafe.id === parseInt(id));
  const cafeType = cafe
    ? "neighborhood"
    : popularCafes.find((cafe) => cafe.id === parseInt(id))
    ? "popular"
    : quietCafes.find((cafe) => cafe.id === parseInt(id))
    ? "quiet"
    : null;

  if (!cafeType) {
    return <p>카페 정보를 찾을 수 없습니다.</p>;
  }

  let cafeInfo;
  if (cafeType === "neighborhood") {
    cafeInfo = neighborhoodCafes.find((cafe) => cafe.id === parseInt(id));
  } else if (cafeType === "popular") {
    cafeInfo = popularCafes.find((cafe) => cafe.id === parseInt(id));
  } else {
    cafeInfo = quietCafes.find((cafe) => cafe.id === parseInt(id));
  }

  return (
    <div className={styles.detail_box}>
      <div className={styles.detail_header}>
        <Link to="/">
          <span>&lt;</span>
        </Link>
        <span>{cafeInfo.name}</span>
        <span>logo</span>
      </div>

      <div className={styles.detail_img}>
        <img src={cafeInfo.url} alt="cafe_img" />
      </div>

      <div className={styles.cafe_info_box}>
        <div className={styles.cafe_info}>
          <p>{cafeInfo.address}</p>
          <p>평일, 토요일 10:00 ~ 22:00</p>
          <p>010 - 1234 - 5678</p>
        </div>
        <div>
          <button onClick={showModal}>좌석 현황</button>
          {modalOpen && <SeatModal setModalOpen={setModalOpen} />}
        </div>
      </div>

      <div className={styles.menu_box}>
        <h2>메뉴</h2>
        <div className={styles.price_box}>
          <span>아메리카노 ----- 1000원</span>
          <span>아메리카노 ----- 1000원</span>
          <br />
          <span>라떼 ------------ 1000원</span>
          <span>아메리카노 ----- 1000원</span>
          <br />
          <span>바닐라라떼 ----- 1000원</span>
          <span>아메리카노 ----- 1000원</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
