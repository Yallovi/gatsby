import { gql } from "@apollo/client";

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
  query Query($characterId: ID!) {
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
