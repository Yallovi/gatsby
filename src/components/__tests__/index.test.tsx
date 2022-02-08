import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/client/testing";
import Inedx from "@pages/index";
import { GET_EPISODE } from "@graphql/query";
import { resultsQuery } from "../queryTest/queryTest";

// import NotFoundPage from "@pages/404";

// describe("Test if the IndexPage component is working as expected", () => {
//   it("<NotFoundPage /> matches snapshot", () => {
//     const component = render(<NotFoundPage data-testid="index-test" />);
//     expect(component.container).toMatchSnapshot();
//   });

//   it("<NotFoundPage /> renders without exploding", () => {
//     const component = render(<NotFoundPage data-testid="index-test" />);
//     expect(component.getByTestId("index-test")).toBeInTheDocument();
//   });
// });
// import renderer from "react-test-renderer";
// import NotFoundPage from "@pages/404";
// import Index from "@pages/index";

// describe("Header", () => {
//   it("renders correctly", () => {
//     const tree = renderer.create(<Index />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

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
  const episodeNumber = await findByText("S01E01");
  expect(episodeNumber).toBeInTheDocument();
});
