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

  export interface CharacterByIdEpisode {
    id: string;
    image: string;
    name: string;
  }
  // export interface CharacterByIdEpisodeData {
  //   episodesByIds: CharacterByIdEpisode[];
  // }
  // export interface CharacterByIdEpisodeVars {
  //   id: string;
  // }
  //   export interface FetchCharactersById
  //     extends ResponseType<{ results: CharacterByIdEpisode[] }> {}
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

export const GET_CHARACTER_BY_ID_EPISODE = gql`
  query Query($ids: [ID!]!) {
    episodesByIds(ids: $ids) {
      characters {
        image
        name
        id
      }
    }
  }
`;

//Персонажи при клике на эпизод

// export interface ModalProps {
//   visible: boolean;
//   id: string;
//   //   content: ReactElement | string;
//   onClose: () => void;
// }
