import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function Menu({ topic, setTopic }) {
  return (
    <div className="menu">
      <div>
        <button
          className={topic === "trending" ? "clicked" : "not-clicked"}
          onClick={() => setTopic("trending")}
        >
          트렌딩
        </button>
        <button
          className={topic === "latest" ? "clicked" : "not-clicked"}
          onClick={() => setTopic("latest")}
        >
          최신
        </button>
        <button
          className={topic === "feed" ? "clicked" : "not-clicked"}
          onClick={() => setTopic("feed")}
        >
          피드
        </button>
      </div>
      <div>
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
