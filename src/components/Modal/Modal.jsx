import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const modal = forwardRef(function Modal(props, ref) {
  const dialog = useRef();
  const currentDialog = props.props.currentDialog;
  const setData = props.props.setData;
  const topic = props.props.topic;

  function handleCloseButton() {
    console.log(currentDialog);
    dialog.current.close();
  }
  function handleDeleteButton() {
    setData((prev) => {
      prev[topic].forEach(function (e, i) {
        if (e.id === currentDialog.id) {
          prev[topic].splice(i, 1);
        }
      });
      console.log(prev);
      return prev;
    });

    dialog.current.close();
  }

  useImperativeHandle(ref, () => {
    return {
      openModal: () => {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog id={currentDialog.id} ref={dialog}>
      <p>{currentDialog.title}</p>
      <img src={currentDialog.image} alt="" />
      <p>{currentDialog.content}</p>
      <p>{currentDialog.createdAt}</p>
      <p>{currentDialog.author}</p>
      <p>{currentDialog.likes}</p>
      <p>{currentDialog.comments}</p>
      <button onClick={handleCloseButton}>close</button>
      <button onClick={handleDeleteButton}>삭제</button>
    </dialog>,
    document.getElementById("modal")
  );
});

export default modal;
