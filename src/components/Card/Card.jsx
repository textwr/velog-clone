import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Modal from "../Modal/Modal";

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
  setData,
  topic,
}) {
  const [currentDialog, SetDialog] = useState({
    id: id,
    image: image,
    title: title,
    content: content,
    createdAt: createdAt,
    author: author,
    userImage: userImage,
    likes: likes,
    comments: comments,
  });
  const dialogRef = useRef();

  function handleClick() {
    SetDialog({
      id: id,
      image: image,
      title: title,
      content: content,
      createdAt: createdAt,
      author: author,
      userImage: userImage,
      likes: likes,
      comments: comments,
    });
    console.log(currentDialog);
    dialogRef.current.openModal();
  }
  return (
    <>
      <Modal ref={dialogRef} props={{ currentDialog, setData, topic }}></Modal>
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
