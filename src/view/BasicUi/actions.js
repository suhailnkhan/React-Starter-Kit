import { useQuery } from "@apollo/client";
import { GET_MOVIES_TITLE } from "./query";

export function GetMovieTitle() {
  const { data, error, refetch, loading } = useQuery(GET_MOVIES_TITLE, {
    variables: {
      //in case you want to pass any variables or payload
    },
  });

  return {
    data: data ? data?.result : [],
    loading: loading,
    refetch: refetch,
    error: error,
  };
}
