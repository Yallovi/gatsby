import { gql } from "@apollo/client";

// export * from './rick-and-morty'

export const FETCH_EPISODE = gql`
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

// export const FETCH_PAGE_CHARACTER = gql`
//   query Query($characterId: ID!) {
//     res: character(id: $characterId) {
//       gender
//       image
//       name
//       species
//       status
//     }
//   }
// `;
