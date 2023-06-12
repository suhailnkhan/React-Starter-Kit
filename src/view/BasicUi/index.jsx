import React from "react";
import { GetMovieTitle } from "view/BasicUi/actions";

const BasicUiIndex = () => {
  const { data } = GetMovieTitle();
  console.log(data);
  return <></>;
};

export { BasicUiIndex };
