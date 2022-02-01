import React from "react";
import { useQuery, gql } from "@apollo/client";

const firstQuery = gql`
  query Query {
    characters(page: 2, filter: { name: "Morty" }) {
      info {
        count
      }
      results {
        name
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;

const IndexPage = () => {
  const { loading, error, data } = useQuery(firstQuery);
  console.log(data);
  if (loading) return "loading...";
  if (error) return "error";

  return <div className="text-3xl font-bold underline">hello world</div>;
};

export default IndexPage;
