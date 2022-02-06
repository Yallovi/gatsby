import { Link } from "gatsby";
import React from "react";
import Layout from "./layout";

interface ModalProps {
  visible: boolean;
  characters: Array<{
    id: string;
    name: string;
    image: string;
  }>;

  onClose: () => void;
}

const Modal = ({ visible = false, characters, onClose }: ModalProps) => {
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
    <Layout>
      <div className="modal" onClick={onClose}>
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="modal-title">Episode сharacters</h3>
            <span className="modal-close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <div className="modal-content">
              {characters.map((res) => (
                <div key={res.id} className="modal-content-block">
                  <Link to="/Characters" state={{id: res.id}}>
                    <div className="modal-content-block__image">
                      <img src={res.image} alt="image character" />
                    </div>
                  </Link>
                  <div>{res.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Modal;
