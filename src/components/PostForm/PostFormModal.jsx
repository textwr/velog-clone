import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const modal = forwardRef(function Modal(setStatus, ref) {
  const dialog = useRef();

  function handleClick() {
    dialog.current.close();
    setStatus.setStatus("main");
  }
  useImperativeHandle(ref, () => {
    return {
      openModal: () => {
        dialog.current.showModal();
      },
      closeModal: () => {
        dialog.current.close();
        setStatus.setStatus("main");
      },
    };
  });
  return createPortal(
    <dialog ref={dialog}>
      <p>작성 완료</p>
      <button onClick={handleClick}>close</button>
    </dialog>,
    document.getElementById("modal")
  );
});

export default modal;
