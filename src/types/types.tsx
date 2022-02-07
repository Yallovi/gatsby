import { gql } from "@apollo/client";

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

  export interface CharacterData {
    gender: string;
    image: string;
    name: string;
    species: string;
    status: string;
    origin: {
      name: string;
      type: string;
      dimension: string;
    };
  }
}

export const GET_EPISODE = gql`
  query Query {
    res: episodes {
      results {
        id
        name
        episode
        airDate: air_date
        characters {
          id
          image
          name
        }
      }
    }
  }
`;

export const GET_PAGE_CHARACTER = gql`
  query ExampleQuery($characterId: ID!) {
    character(id: $characterId) {
      gender
      image
      name
      species
      status
      origin {
        name
        type
        dimension
      }
    }
  }
`;
