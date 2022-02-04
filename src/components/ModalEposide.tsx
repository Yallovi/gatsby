import React, { ReactElement } from "react";

interface ModalProps {
  visible: boolean;
  id: string;
  //   content: ReactElement | string;
  onClose: () => void;
}

const Modal = ({ visible = false, id = "", onClose }: ModalProps) => {
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  if (!visible) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{id}</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content"></div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
