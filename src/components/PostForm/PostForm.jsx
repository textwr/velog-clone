import styles from "./styles.module.css";
import { useRef } from "react";

export default function PostForm({ setData, topic }) {
  const nameRef = useRef();
  const imageRef = useRef();
  const contentRef = useRef();
  const authorRef = useRef();
  const profileImgRef = useRef();

  function submit(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    const image = imageRef.current.value;
    const content = contentRef.current.value;
    const author = authorRef.current.value;
    const profileImg = profileImgRef.current.value;

    setData((prev) => {
      let today = new Date();

      let year = today.getFullYear(); // 년도
      let month = today.getMonth() + 1; // 월
      let date = today.getDate(); // 날짜
      let hours = today.getHours(); // 시
      let minutes = today.getMinutes(); // 분
      let seconds = today.getSeconds(); // 초

      month = month < 10 ? `0${month}` : month;
      date = date < 10 ? `0${date}` : date;
      hours = hours < 10 ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      const newData = {
        id: Date.now(),
        titile: name,
        content: content,
        author: author,
        createdAt: `${year}-${month}-${date}T${hours}:${minutes}:${seconds}Z`,
        image: image,
        likes: 0,
        userImage: profileImg,
        comments: 0,
      };

      //const prevArr = prev[topic];
      //const newArr = [...prevArr, newData];
      prev[topic].push(newData);
      console.log(prev);
      return prev;
    });
  }

  return (
    <div className={styles.postForm}>
      <form onSubmit={submit}>
        <div className={styles.name}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="제목을 입력하세요"
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
            ref={profileImgRef}
            required
          />
        </div>
        <div>
          <input type="submit" value="Subscribe!" />
        </div>
      </form>
    </div>
  );
}
