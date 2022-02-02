import React from "react";
import { useQuery, gql } from "@apollo/client";
import Layout from "../components/layout";
import { RickAndMorty, GET_EPISODE } from "../types/types";
import Characters from "../components/Characters";

const IndexPage = () => {
  const { loading, error, data } =
    useQuery<RickAndMorty.FetchEpisodesResponse>(GET_EPISODE);

  const results = data && data.res && data.res.results;
  console.log("results: ", results);
  // className = "bg-slate-300";
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
                onClick={() => alert("hello")}
              >
                <div className="text-center">
                  {res.id}. {res.name}
                </div>
                <div className="text-center">{res.episode}</div>
                <div className="text-center">{res.airDate}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default IndexPage;
