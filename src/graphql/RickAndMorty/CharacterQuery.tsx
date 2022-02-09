import { gql } from "@apollo/client";

export const FETCH_PAGE_CHARACTER = gql`
  query Query($characterId: ID!) {
    res: character(id: $characterId) {
      gender
      image
      name
      species
      status
    }
  }
`;
