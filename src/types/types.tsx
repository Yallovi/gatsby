import { useQuery, gql } from "@apollo/client";

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

export const GET_EPISODE = gql`
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
