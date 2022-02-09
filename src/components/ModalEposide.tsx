import { Link } from "gatsby";
import React from "react";
import Layout from "~components/Layout";

interface Modal {
  visible: boolean;
  characters: Array<{
    id: string;
    name: string;
    image: string;
  }>;

  onClose: () => void;
}

const Modal: React.FC<Modal> = (props) => {
  const { visible, onClose, characters } = props;

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
      <div
        className="modal fixed top-0 bottom-0 left-0 right-0 w-full flex items-center justify-center z-9999 "
        onClick={onClose}
      >
        <div
          className="modal-dialog w-full bg-white relative text-left flex flex-col overflow-hidden max-w-screen-md m-0-20"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header flex items-center p-4 justify-between">
            <h3 className="modal-title m-0">Episode сharacters</h3>
            <span className="modal-close cursor-pointer p-4" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="modal-body overflow-auto">
            <div className="modal-content p-4 flex flex-wrap justify-around pb-2">
              {characters.map((res) => (
                <div key={res.id} className="modal-content-block mb-5">
                  <Link to={`/character/${res.id}`}>
                    <div className="modal-content-block__image mb-2 cursor-pointer">
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
