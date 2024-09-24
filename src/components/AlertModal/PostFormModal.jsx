import { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const modal = forwardRef(function Modal(props, ref) {
  const dialog = useRef();
  const [content, setContent] = useState("");

  function handleClick() {
    dialog.current.close();
    props.setStatus("main");
  }
  useImperativeHandle(ref, () => {
    if (ref.current !== null) setContent(ref.current);
    return {
      openModalCreate: () => {
        dialog.current.showModal();
      },
      openModalModify: () => {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog}>
      <p>{content}</p>
      <button onClick={handleClick}>close</button>
    </dialog>,
    document.getElementById("modal")
  );
});

export default modal;
