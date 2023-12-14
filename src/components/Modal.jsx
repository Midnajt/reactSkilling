import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./UI/Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  // /useImperativeHandle pozwala wywolywac funkcje na przezywanych referencjach z innych komponentow
  useImperativeHandle(ref, () => {
    return {
      //nazwe tej funkcji (open) sami deklarujemy
      open() {
        dialog.current.showModal(); //wbudowana metoda w <dialog>
      },
    };
  });

  return createPortal(
    //backdrop:bg-stone-900/90 wbudowana klasa tailwind dla tla dialogu */90 daje opacity
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">{buttonCaption}</Button>
      </form>
    </dialog>,
    document.querySelector("#modal-root")
  );
});

export default Modal;
