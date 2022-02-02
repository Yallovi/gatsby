import React from "react";
import { useQuery, gql } from "@apollo/client";
import Layout from "../components/layout";

type ResponseType<R> = {
  res: R;
};

export namespace RickAndMorty {
  export interface Character {
    id: string;
  }

  export interface Episode {
    id: string;
    name: string;
    episode: string;
    airDate: string;
    characters: Character[];
  }

  export interface FetchEpisodesResponse
    extends ResponseType<{ results: Episode[] }> {}
}

const GET_EPISODE = gql`
  query Query {
    res: episodes {
      results {
        id
        name
        episode
        airDate: air_date
      }
    }
  }
`;

const IndexPage = () => {
  const { loading, error, data } =
    useQuery<RickAndMorty.FetchEpisodesResponse>(GET_EPISODE);

  const results = data && data.res && data.res.results;
  console.log("results: ", results);

  return (
    <Layout>
      <h1>hello</h1>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>error</div>
      ) : (
        <div>
          {results.map((res) => (
            <div key={res.id}>
              <div>{res.name}</div>
              <div>{res.episode}</div>
              <div>{res.airDate}</div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default IndexPage;
