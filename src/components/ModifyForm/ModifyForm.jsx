import styles from "./styles.module.css";
import { useRef } from "react";
import AlertModal from "../AlertModal/PostFormModal";

export default function PostForm({ setData, topic, setStatus, currentDialog }) {
  const nameRef = useRef();
  const imageRef = useRef();
  const contentRef = useRef();
  const authorRef = useRef();
  const profileImgRef = useRef();
  const dialogRef = useRef("수정 완료");

  function modify(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    const image = imageRef.current.value;
    const content = contentRef.current.value;
    const author = authorRef.current.value;
    const profileImg = profileImgRef.current.value;
    const createdAt = currentDialog.createdAt;
    const comments = currentDialog.comments;
    const likes = currentDialog.likes;
    const id = currentDialog.id;
    const newData = {
      author: author,
      comments: comments,
      content: content,
      createdAt: createdAt,
      id: id,
      image: image,
      likes: likes,
      title: name,
      userImage: profileImg,
    };

    setData((prev) => {
      prev[topic].forEach((e, idx) => {
        if (e.id === currentDialog.id) {
          prev[topic][idx] = newData;
        }
      });
      dialogRef.current.openModalModify();
      return prev;
    });
  }

  return (
    <>
      <AlertModal ref={dialogRef} setStatus={setStatus}></AlertModal>
      <div className={styles.postForm}>
        <form onSubmit={modify}>
          <div className={styles.name}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="제목을 입력하세요"
              defaultValue={currentDialog.title}
              ref={nameRef}
              required
            />
          </div>
          <div className={styles.image}>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="이미지 주소를 입력하세요"
              defaultValue={currentDialog.userImage}
              ref={imageRef}
              required
            />
          </div>
          <div className={styles.content}>
            <textarea
              type="text"
              name="content"
              id="content"
              placeholder="내용을 작성하세요"
              defaultValue={currentDialog.content}
              ref={contentRef}
              required
            />
          </div>
          <div className={styles.author}>
            <input
              type="text"
              name="author"
              id="author"
              placeholder="작성자를 써주세요"
              defaultValue={currentDialog.author}
              ref={authorRef}
              required
            />
          </div>
          <div className={styles.userImage}>
            <input
              type="text"
              name="userImage"
              id="userImage"
              placeholder="작성자의 프로필 이미지 주소를 써주세요"
              defaultValue={currentDialog.userImage}
              ref={profileImgRef}
              required
            />
          </div>
          <div>
            <input type="submit" value="modify!" />
          </div>
        </form>
      </div>
    </>
  );
}
