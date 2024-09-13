import velog from "../../assets/velog.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

export default function Header({ status, setStatus }) {
  function handleButton() {
    if (status === "main") {
      setStatus("posting");
    } else if (status === "posting") setStatus("main");
  }

  return (
    <div className={styles.header}>
      <div>
        <img src={velog} alt="" />
      </div>
      <div className={styles.headerMenu}>
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <button onClick={handleButton}>
          {status === "main" ? "글쓰기" : "홈으로"}
        </button>
      </div>
    </div>
  );
}
