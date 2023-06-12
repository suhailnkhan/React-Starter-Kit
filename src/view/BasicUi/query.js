import { gql } from "@apollo/client";

export const GET_MOVIES_TITLE = gql`
  query movieTitle {
    result @rest(type: "title", path: "titles") {
      results
    }
  }
`;
