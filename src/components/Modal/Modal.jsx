import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const modal = forwardRef(function Modal(props, ref) {
  const dialog = useRef();
  const currentDialog = props.props.currentDialog;
  const remove = props.props.remove;
  const setStatus = props.props.setStatus;

  function handleCloseButton() {
    dialog.current.close();
  }
  function handleDeleteButton() {
    remove(currentDialog);
    dialog.current.close();
  }

  function handleModifyButton() {
    setStatus("modify");
    console.log(currentDialog);

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
    <dialog id={currentDialog?.id ?? ""} ref={dialog}>
      <p>{currentDialog?.title ?? ""}</p>
      <img src={currentDialog?.image ?? ""} alt="" />
      <p>{currentDialog?.content ?? ""}</p>
      <p>{currentDialog?.createdAt ?? ""}</p>
      <p>{currentDialog?.author ?? ""}</p>
      <p>{currentDialog?.likes ?? ""}</p>
      <p>{currentDialog?.comments ?? ""}</p>
      <button onClick={handleCloseButton}>close</button>
      <button onClick={handleDeleteButton}>삭제</button>
      <button onClick={handleModifyButton}>수정</button>
    </dialog>,
    document.getElementById("modal")
  );
});

export default modal;
