import React from "react";
import {
  neighborhoodCafes,
  popularCafes,
  quietCafes,
} from "../components/Cafes";
import styles from "../css.modules/Home.module.css";
import { Link } from "react-router-dom";
import CafeItem from "../components/CafeItem";

const Home = () => {
  return (
    <div>
      <div className={styles.search_box}>
        <h1>카페 찾기</h1>
        <form>
          <select name="mySelect">
            <option value="option1">전체</option>
            <option value="option2">내 주변 카페</option>
            <option value="option3">인기 카페</option>
            <option value="option3">조용한 카페</option>
          </select>
          <input type="text" placeholder="키워드를 입력하세요" />
        </form>
      </div>

      <div className={styles.cafe_box}>
        <div className={styles.title_box}>
          <h1 className={styles.keyword}>내 주변 카페</h1>
          <p>예약하기</p>
        </div>
        <div className={styles.cafes_box}>
          <ul className={styles.cafes_list}>
            {neighborhoodCafes.map((cafe) => (
              <CafeItem key={cafe.id} cafe={cafe} />
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.cafe_box}>
        <div className={styles.title_box}>
          <h1>인기 카페</h1>
          <p>예약하기</p>
        </div>
        <div className={styles.cafes_box}>
          <ul className={styles.cafes_list}>
            {popularCafes.map((cafe2) => (
              <CafeItem key={cafe2.id} cafe={cafe2} />
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.cafe_box}>
        <div className={styles.title_box}>
          <h1 className={styles.keyword}>조용한 카페</h1>
          <p>예약하기</p>
        </div>
        <div className={styles.cafes_box}>
          <ul className={styles.cafes_list}>
            {quietCafes.map((cafe3) => (
              <CafeItem key={cafe3.id} cafe={cafe3} />
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.home_footer}></div>
    </div>
  );
};

export default Home;
