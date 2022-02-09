import { gql } from "@apollo/client";

// export * from './rick-and-morty'

export const FETCH_EPISODE = gql`
  query FetchEpisode {
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
