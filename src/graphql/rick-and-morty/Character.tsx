import { gql } from "@apollo/client";

export const FETCH_PAGE_CHARACTER = gql`
  query FetchCharacter($characterId: ID!) {
    res: character(id: $characterId) {
      gender
      image
      name
      species
      status
    }
  }
`;
