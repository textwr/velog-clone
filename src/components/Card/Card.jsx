import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Card({
  id,
  image,
  title,
  content,
  createdAt,
  author,
  userImage,
  likes,
  comments,
}) {
  return (
    <li className="card" key={id}>
      <div>
        <img className="card-img" src={image} alt="" />
      </div>
      <div className="middle">
        <p className="card-title">{title}</p>
        <div className="card-content">{content}</div>
        <p className="dateComments">
          <span>{createdAt}</span>
          <span>·</span>
          <span>{comments}개의 댓글</span>
        </p>
      </div>
      <div className="bottom">
        <span className="author">
          <img src={userImage} alt="" />
          by <b>{author}</b>
        </span>
        <span className="likes">
          <FontAwesomeIcon icon={faHeart} />
          {likes}
        </span>
      </div>
    </li>
  );
}
