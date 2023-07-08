import React from "react";
import {
  neighborhoodCafes,
  popularCafes,
  quietCafes,
} from "../components/Cafes";
import styles from "../css.modules/Home.module.css";
import { Link } from "react-router-dom";

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
              <li key={cafe.id} className={styles.cafe_item}>
                <Link to={`/detail/${cafe.id}`}>
                  <div className={styles.detail_box}>
                    <div className={styles.image_box}>
                      <img src={cafe.url} alt="cafe_img" />
                    </div>
                    <div className={styles.info_box}>
                      <p className={styles.info_title}>{cafe.name}</p>
                      <p>{cafe.address}</p>
                      <div className={styles.keywords}>
                        <span>{cafe.keyword1}</span>
                        <span>{cafe.keyword2}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
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
              <li key={cafe2.id} className={styles.cafe_item}>
                <Link to={`/detail/${cafe2.id}`}>
                  <div className={styles.detail_box}>
                    <div className={styles.image_box}>
                      <img src={cafe2.url} alt="cafe_img" />
                    </div>
                    <div className={styles.info_box}>
                      <p className={styles.info_title}>{cafe2.name}</p>
                      <p>{cafe2.address}</p>
                      <div className={styles.keywords}>
                        <span>{cafe2.keyword1}</span>
                        <span>{cafe2.keyword2}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
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
              <li key={cafe3.id} className={styles.cafe_item}>
                <Link to={`/detail/${cafe3.id}`}>
                  <div className={styles.detail_box}>
                    <div className={styles.image_box}>
                      <img src={cafe3.url} alt="cafe_img" />
                    </div>
                    <div className={styles.info_box}>
                      <p className={styles.info_title}>{cafe3.name}</p>
                      <p>{cafe3.address}</p>
                      <div className={styles.keywords}>
                        <span>{cafe3.keyword1}</span>
                        <span>{cafe3.keyword2}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.home_footer}></div>
    </div>
  );
};

export default Home;
