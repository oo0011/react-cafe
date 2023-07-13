import { useState } from "react";
import styles from "../css.modules/Home.module.css";
import { Link } from "react-router-dom";

function CafeItem({ cafe }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite);

    // 카페 정보를 "zim" 페이지에 저장
    if (!isFavorite) {
      const zimCafe = {
        name: cafe.name,
        address: cafe.address,
        // 다른 필요한 카페 정보도 추가
      };
      localStorage.setItem("zimCafe", JSON.stringify(zimCafe));
    }
  };

  return (
    <li key={cafe.id} className={styles.cafe_item}>
      <div className={styles.detail_box}>
        <Link to={`/detail/${cafe.id}`}>
          <div className={styles.image_box}>
            <img src={cafe.url} alt="cafe_img" />
          </div>
        </Link>
        <div className={styles.info_box}>
          <Link to={`/detail/${cafe.id}`}>
            <p className={styles.info_title}>{cafe.name}</p>
            <p>{cafe.address}</p>
            <div className={styles.keywords}>
              <span>{cafe.keyword1}</span>
              <span>{cafe.keyword2}</span>
            </div>
          </Link>
        </div>
        <div className={styles.heart_container}>
          <button
            className={isFavorite ? styles.heart_filled : styles.heart_empty}
            onClick={handleHeartClick}
          />
        </div>
      </div>
    </li>
  );
}

export default CafeItem;
