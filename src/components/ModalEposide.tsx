import React, { ReactElement } from "react";
// import { ModalProps } from "../types/types";
import Layout from "./layout";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_ID_EPISODE, RickAndMorty } from "../types/types";

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

  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID_EPISODE, {
    variables: { ids: id },
  });
  //   console.log("data", data);

  const results =
    data &&
    data.episodesByIds &&
    data.episodesByIds[0] &&
    data.episodesByIds[0].characters;
  console.log("results", results);

  React.useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  if (!visible) return null;

  return (
    <Layout>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>error</div>
      ) : (
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
                {/* Исправить */}
                {results.map((res) => {
                  <div key={res.id}>
                    <div>
                      <img src={res.img} alt="image character" />
                    </div>
                    <div> {res.name} </div>
                  </div>;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
export default Modal;
