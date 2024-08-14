import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

const portalElement = document.getElementById("portal");

const Modal = ({ open, children, onClose, className }) => {
  if (!open) return null;

  return createPortal(
    <>
      <div className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-70 z-50" />
      <div
        className={twMerge(
          "fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 p-16 bg-white z-50",
          className
        )}
      >
        {children}
        <button onClick={onClose} className="absolute right-8 top-8">
          Close
        </button>
      </div>
    </>,
    portalElement
  );
};

export default Modal;
