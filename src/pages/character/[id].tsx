import { PageProps } from "gatsby";
import React from "react";
import Layout from "@components/Layout";
import { useQuery } from "@apollo/client";
import { GET_PAGE_CHARACTER } from "@graphql/query";
import ErrorPage from "@pages/404";
import Preloader from "@components/Preloader/Preloader";
import { Link } from "gatsby";
import { RickAndMorty } from "@Types/Types";

// interface Props {
//   location: {
//     state: {
//       id: string;
//     };
//   };
// }

const Characters = ({ params }: PageProps) => {
  const { id } = params;
  console.log("id", id);

  const { loading, error, data } = useQuery<
    RickAndMorty.FetchCharacterResponse,
    RickAndMorty.CharacterDataVars
  >(GET_PAGE_CHARACTER, {
    variables: { characterId: id },
  });

  if (loading) {
    return (
      <div>
        <h1>loading</h1>
        <Preloader />
      </div>
    );
  }

  const character = data && data.res;
  const { name, image, gender, species, status } = character;

  if (error) {
    return <ErrorPage />;
  }

  return (
    <Layout>
      <div className="text-lg font-medium">
        <Link to="/">Back</Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mb-10">
          <img src={image} alt="character image" />
        </div>
        <h3 className="font-bold mb-5">Character information.</h3>
        <div>
          {" "}
          <span>The name of the character: </span> {name}{" "}
        </div>
        <div>
          <span>The gender of the character: </span> {gender}{" "}
        </div>
        <div>
          <span>The species of the character: </span> {species}{" "}
        </div>
        <div>
          <span>The status of the character: </span> {status}{" "}
        </div>
      </div>
    </Layout>
  );
};

export default Characters;
