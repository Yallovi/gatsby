import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Layout from "../components/layout";
import { RickAndMorty, GET_EPISODE } from "../types/types";
import Modal from "../components/ModalEposide";

const IndexPage = () => {
  const [isModal, setModal] = React.useState(false);
  const [propsDate, setProps] = React.useState("");
  const onClose = () => setModal(false);

  const { loading, error, data } =
    useQuery<RickAndMorty.FetchEpisodesResponse>(GET_EPISODE);
  // console.log(data);

  const results = data && data.res && data.res.results;
  console.log("index", results);
  return (
    <Layout>
      <div className="bg-slate-300">
        {loading ? (
          <div>loading...</div>
        ) : error ? (
          <div>error</div>
        ) : (
          <div className="bg-slate-300 flex flex-wrap place-content-around">
            {results.map((res) => (
              <div
                className=" p-6 m-10 min-w-max bg-white rounded-xl shadow-lg w-96 cursor-pointer hover:scale-125 ease-in duration-300 "
                key={res.id}
                onClick={() => {
                  setModal(true);
                  setProps(res.id);
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
            <Modal id={propsDate} visible={isModal} onClose={onClose} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default IndexPage;
