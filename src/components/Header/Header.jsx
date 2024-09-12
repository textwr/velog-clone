import velog from "../../assets/velog.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div>
        <img src={velog} alt="" />
      </div>
      <div>
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <button>로그인</button>
      </div>
    </div>
  );
}
