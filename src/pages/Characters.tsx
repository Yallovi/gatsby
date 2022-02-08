import React from "react";
import Layout from "@components/Layout";
import { useQuery } from "@apollo/client";
import { GET_PAGE_CHARACTER } from "@graphql/query";
import ErrorPage from "@pages/404";
import Preloader from "@components/Preloader/Preloader";
import { Link } from "gatsby";
import { RickAndMorty } from "@Types/Types";

interface Props {
  location: {
    state: {
      id: string;
    };
  };
}

const Characters = ({ location }: Props) => {
  const id = location.state.id;

  const { loading, error, data } = useQuery(GET_PAGE_CHARACTER, {
    variables: { characterId: id },
  });
  // console.log(data);

  const results = data && data.character;

  if (loading) {
    return <Preloader />;
  }
  if (error) {
    return <ErrorPage />;
  }

  return (
    <Layout>
      {/* <div className="">
        {Object.entries(results).map(([key, value]) => (
          <div className=""> {`${key}: ${value}`}</div>
        ))}
      </div> */}
      <div className="text-lg font-medium">
        <Link to="/">Back</Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mb-10">
          <img src={data.character.image} alt="character image" />
        </div>
        <h3 className="font-bold mb-5">Character information.</h3>
        <div>
          {" "}
          <span>The name of the character: </span> {results.name}{" "}
        </div>
        <div>
          <span>The gender of the character: </span> {results.gender}{" "}
        </div>
        <div>
          <span>The species of the character: </span> {results.species}{" "}
        </div>
        <div>
          <span>The status of the character: </span> {results.status}{" "}
        </div>

        <div className=" flex flex-col justify-center items-center ">
          <h3 className="font-bold mt-10 mb-5">
            The character's origin location.{" "}
          </h3>
          <div>
            {" "}
            <span>The name of the location: </span> {results.origin.name}{" "}
          </div>
          <div>
            {" "}
            <span>The type of the location: </span>{" "}
            {results.origin.type || "unknown"}{" "}
          </div>
          <div>
            {" "}
            <span>The dimension in which the location is located: </span>{" "}
            {results.origin.dimension || "unknown"}{" "}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Characters;
