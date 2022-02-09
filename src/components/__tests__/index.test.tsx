import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/client/testing";
import Inedx from "@pages/index";
import { GET_EPISODE } from "@graphql/query";
import { resultsQuery } from "../queryTest/queryTest";

afterEach(cleanup);

const mocks = [
  {
    request: {
      query: GET_EPISODE,
    },
    result: resultsQuery,
  },
];

it("renders Episode", async () => {
  const { findByText, getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Inedx />
    </MockedProvider>
  );

  expect(getByText("loading")).toBeInTheDocument();
  const episodeNumber = await findByText("S02E09");
  expect(episodeNumber).toBeInTheDocument();
  expect(resultsQuery.data.res.results.length).toBe(20);
});
