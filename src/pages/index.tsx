import React from "react";
import { useQuery } from "@apollo/client";
import Layout from "../components/layout";
import { RickAndMorty, GET_EPISODE } from "../types/types";
import Modal from "../components/ModalEposide";
import ErrorPage from "./404";

const IndexPage = () => {
  const [isModal, setModal] = React.useState(false);
  const [propsDate, setProps] = React.useState([]);

  const onClose = () => setModal(false);

  const { loading, error, data } =
    useQuery<RickAndMorty.FetchEpisodesResponse>(GET_EPISODE);

  const results = data && data.res && data.res.results;

  if (error) {
    return <ErrorPage />;
  }

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <Layout>
      <div className="bg-slate-300">
        <div className="bg-slate-300 flex flex-wrap place-content-around">
          {results.map((res) => (
            <div
              className=" p-6 m-10 min-w-max bg-white rounded-xl shadow-lg w-96 cursor-pointer hover:scale-125 ease-in duration-300 "
              key={res.id}
              onClick={() => {
                setModal(true);
                setProps(res.characters);
              }}
            >
              <div className="text-center">
                <div>
                  {res.id}. {res.name}
                </div>
                <div>{res.episode}</div>
                <div>{res.airDate}</div>
              </div>
            </div>
          ))}
          <Modal characters={propsDate} visible={isModal} onClose={onClose} />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
