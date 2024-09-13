import styles from "./styles.module.css";
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
  function handleClick() {
    console.log("dialog" + id);
    const dialog = document.getElementById("dialog" + id);
    const closeBtn = dialog.querySelector(".closeBtn");
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      dialog.close();
    });
    dialog.showModal();
  }
  return (
    <>
      <dialog id={"dialog" + id}>
        <p>{title}</p>
        <img src={image} alt="" />
        <p>{content}</p>
        <p>{createdAt}</p>
        <p>{author}</p>
        <p>{likes}</p>
        <p>{comments}</p>
        <button className="closeBtn">Close</button>
      </dialog>
      <li className={styles.card} key={id} onClick={handleClick}>
        <div className={styles.cardContainer}>
          <img className={styles.cardImg} src={image} alt="" />
        </div>
        <div className={styles.middle}>
          <p className={styles.cardTitle}>{title}</p>
          <div className={styles.cardContent}>{content}</div>
          <p className={styles.dateComments}>
            <span>{createdAt}</span>
            <span>·</span>
            <span>{comments}개의 댓글</span>
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.author}>
            <span>
              <img src={userImage} alt="" />
            </span>
            <span>
              by <b>{author}</b>
            </span>
          </div>
          <div>
            <span className={styles.likes}>
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span className={styles.likes}>{likes}</span>
          </div>
        </div>
      </li>
    </>
  );
}
