import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

export default function Menu({ topic, setTopic }) {
  return (
    <div className={styles.menu}>
      <div>
        <button
          className={
            topic === "trending" ? `${styles.menuClicked}` : "not-clicked"
          }
          onClick={() => setTopic("trending")}
        >
          <FontAwesomeIcon icon={faArrowTrendUp} />
          <span>트렌딩</span>
        </button>
        <button
          className={
            topic === "latest" ? `${styles.menuClicked}` : "not-clicked"
          }
          onClick={() => setTopic("latest")}
        >
          <FontAwesomeIcon icon={faClock} />
          <span>최신</span>
        </button>
        <button
          className={topic === "feed" ? `${styles.menuClicked}` : "not-clicked"}
          onClick={() => setTopic("feed")}
        >
          <FontAwesomeIcon icon={faRss} />
          <span>피드</span>
        </button>
      </div>
      <div className={styles.menuRight}>
        <select>
          <option value="today">오늘</option>
          <option value="week">이번 주</option>
          <option value="month">이번 달</option>
          <option value="year">올해</option>
        </select>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          style={{ color: "#808080" }}
        />
      </div>
    </div>
  );
}
