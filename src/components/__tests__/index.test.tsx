import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/client/testing";
import Inedx from "@pages/index";
import { GET_EPISODE } from "@graphql/query";

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
    result: {
      data: {
        res: {
          results: [
            {
              id: "1",
              name: "Pilot",
              episode: "S01E01",
              airDate: "December 2, 2013",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "35",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/35.jpeg",
                  name: "Bepisian",
                },
                {
                  id: "38",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "62",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/62.jpeg",
                  name: "Canklanker Thom",
                },
                {
                  id: "92",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/92.jpeg",
                  name: "Davin",
                },
                {
                  id: "127",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/127.jpeg",
                  name: "Frank Palicky",
                },
                {
                  id: "144",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/144.jpeg",
                  name: "Glenn",
                },
                {
                  id: "158",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/158.jpeg",
                  name: "Hookah Alien",
                },
                {
                  id: "175",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/175.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "179",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/179.jpeg",
                  name: "Jessica",
                },
                {
                  id: "181",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/181.jpeg",
                  name: "Jessica's Friend",
                },
                {
                  id: "239",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/239.jpeg",
                  name: "Mr. Goldenfold",
                },
                {
                  id: "249",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/249.jpeg",
                  name: "Mrs. Sanchez",
                },
                {
                  id: "271",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/271.jpeg",
                  name: "Principal Vagina",
                },
                {
                  id: "338",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/338.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "394",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/394.jpeg",
                  name: "Davin",
                },
                {
                  id: "395",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/395.jpeg",
                  name: "Greebybobe",
                },
                {
                  id: "435",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/435.jpeg",
                  name: "Pripudlian",
                },
              ],
            },
            {
              id: "2",
              name: "Lawnmower Dog",
              episode: "S01E02",
              airDate: "December 9, 2013",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "38",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "46",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/46.jpeg",
                  name: "Bill",
                },
                {
                  id: "63",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/63.jpeg",
                  name: "Centaur",
                },
                {
                  id: "80",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/80.jpeg",
                  name: "Creepy Little Girl",
                },
                {
                  id: "175",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/175.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "221",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/221.jpeg",
                  name: "Melissa",
                },
                {
                  id: "239",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/239.jpeg",
                  name: "Mr. Goldenfold",
                },
                {
                  id: "246",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/246.jpeg",
                  name: "Mrs. Pancakes",
                },
                {
                  id: "304",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/304.jpeg",
                  name: "Scary Brandon",
                },
                {
                  id: "305",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/305.jpeg",
                  name: "Scary Glenn",
                },
                {
                  id: "306",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/306.jpeg",
                  name: "Scary Terry",
                },
                {
                  id: "329",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/329.jpeg",
                  name: "Snuffles (Snowball)",
                },
                {
                  id: "338",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/338.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "396",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/396.jpeg",
                  name: "Scary Teacher",
                },
                {
                  id: "397",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/397.jpeg",
                  name: "Fido",
                },
                {
                  id: "398",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/398.jpeg",
                  name: "Accountant dog",
                },
                {
                  id: "405",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/405.jpeg",
                  name: "Trunkphobic suspenders guy",
                },
              ],
            },
            {
              id: "3",
              name: "Anatomy Park",
              episode: "S01E03",
              airDate: "December 16, 2013",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "12",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
                  name: "Alexander",
                },
                {
                  id: "17",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
                  name: "Annie",
                },
                {
                  id: "38",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "45",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/45.jpeg",
                  name: "Bill",
                },
                {
                  id: "96",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/96.jpeg",
                  name: "Tuberculosis",
                },
                {
                  id: "97",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/97.jpeg",
                  name: "Gonorrhea",
                },
                {
                  id: "98",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/98.jpeg",
                  name: "Hepatitis A",
                },
                {
                  id: "99",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/99.jpeg",
                  name: "Hepatitis C",
                },
                {
                  id: "100",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/100.jpeg",
                  name: "Bubonic Plague",
                },
                {
                  id: "101",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/101.jpeg",
                  name: "E. Coli",
                },
                {
                  id: "108",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/108.jpeg",
                  name: "Dr. Xenon Bloom",
                },
                {
                  id: "112",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/112.jpeg",
                  name: "Eric McMan",
                },
                {
                  id: "114",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/114.jpeg",
                  name: "Ethan",
                },
                {
                  id: "169",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/169.jpeg",
                  name: "Jacob",
                },
                {
                  id: "175",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/175.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "186",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/186.jpeg",
                  name: "Joyce Smith",
                },
                {
                  id: "201",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/201.jpeg",
                  name: "Leonard Smith",
                },
                {
                  id: "268",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/268.jpeg",
                  name: "Poncho",
                },
                {
                  id: "300",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/300.jpeg",
                  name: "Roger",
                },
                {
                  id: "302",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/302.jpeg",
                  name: "Ruben",
                },
                {
                  id: "338",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/338.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "356",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/356.jpeg",
                  name: "Tom Randolph",
                },
              ],
            },
            {
              id: "4",
              name: "M. Night Shaym-Aliens!",
              episode: "S01E04",
              airDate: "January 13, 2014",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "38",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "87",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/87.jpeg",
                  name: "Cynthia",
                },
                {
                  id: "175",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/175.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "179",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/179.jpeg",
                  name: "Jessica",
                },
                {
                  id: "181",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/181.jpeg",
                  name: "Jessica's Friend",
                },
                {
                  id: "191",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/191.jpeg",
                  name: "Kevin",
                },
                {
                  id: "239",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/239.jpeg",
                  name: "Mr. Goldenfold",
                },
                {
                  id: "241",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/241.jpeg",
                  name: "Mr. Marklovitz",
                },
                {
                  id: "270",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/270.jpeg",
                  name: "Prince Nebulon",
                },
                {
                  id: "337",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/337.jpeg",
                  name: "Stu",
                },
                {
                  id: "338",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/338.jpeg",
                  name: "Summer Smith",
                },
              ],
            },
            {
              id: "5",
              name: "Meeseeks and Destroy",
              episode: "S01E05",
              airDate: "January 20, 2014",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "38",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "41",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/41.jpeg",
                  name: "Big Boobed Waitress",
                },
                {
                  id: "89",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/89.jpeg",
                  name: "Dale",
                },
                {
                  id: "116",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/116.jpeg",
                  name: "Evil Beth Clone",
                },
                {
                  id: "117",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/117.jpeg",
                  name: "Evil Jerry Clone",
                },
                {
                  id: "120",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/120.jpeg",
                  name: "Evil Summer Clone",
                },
                {
                  id: "175",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/175.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "193",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/193.jpeg",
                  name: "King Jellybean",
                },
                {
                  id: "238",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/238.jpeg",
                  name: "Mr. Booby Buyer",
                },
                {
                  id: "242",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/242.jpeg",
                  name: "Mr. Meeseeks",
                },
                {
                  id: "271",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/271.jpeg",
                  name: "Principal Vagina",
                },
                {
                  id: "303",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/303.jpeg",
                  name: "Samantha",
                },
                {
                  id: "326",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/326.jpeg",
                  name: "Slippery Stair",
                },
                {
                  id: "333",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/333.jpeg",
                  name: "Stair Goblin",
                },
                {
                  id: "338",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/338.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "343",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/343.jpeg",
                  name: "Tammy Guetermann",
                },
                {
                  id: "399",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/399.jpeg",
                  name: "Tiny-persons advocacy group lawyer",
                },
                {
                  id: "400",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/400.jpeg",
                  name: "Giant Judge",
                },
              ],
            },
            {
              id: "6",
              name: "Rick Potion #9",
              episode: "S01E06",
              airDate: "January 27, 2014",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "3",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "4",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "5",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "38",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "58",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/58.jpeg",
                  name: "Brad",
                },
                {
                  id: "82",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/82.jpeg",
                  name: "Cronenberg Rick",
                },
                {
                  id: "83",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/83.jpeg",
                  name: "Cronenberg Morty",
                },
                {
                  id: "92",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/92.jpeg",
                  name: "Davin",
                },
                {
                  id: "155",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/155.jpeg",
                  name: "Harold",
                },
                {
                  id: "175",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/175.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "179",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/179.jpeg",
                  name: "Jessica",
                },
                {
                  id: "181",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/181.jpeg",
                  name: "Jessica's Friend",
                },
                {
                  id: "216",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/216.jpeg",
                  name: "MC Haps",
                },
                {
                  id: "234",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/234.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "239",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/239.jpeg",
                  name: "Mr. Goldenfold",
                },
                {
                  id: "249",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/249.jpeg",
                  name: "Mrs. Sanchez",
                },
                {
                  id: "251",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/251.jpeg",
                  name: "Nancy",
                },
                {
                  id: "271",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/271.jpeg",
                  name: "Principal Vagina",
                },
                {
                  id: "293",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/293.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "338",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/338.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "343",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/343.jpeg",
                  name: "Tammy Guetermann",
                },
                {
                  id: "394",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/394.jpeg",
                  name: "Davin",
                },
              ],
            },
            {
              id: "7",
              name: "Raising Gazorpazorp",
              episode: "S01E07",
              airDate: "March 10, 2014",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "3",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "4",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "5",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "59",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/59.jpeg",
                  name: "Brad Anderson",
                },
                {
                  id: "151",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/151.jpeg",
                  name: "Gwendolyn",
                },
                {
                  id: "168",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/168.jpeg",
                  name: "Jackie",
                },
                {
                  id: "211",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/211.jpeg",
                  name: "Ma-Sha",
                },
                {
                  id: "230",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/230.jpeg",
                  name: "Morty Jr.",
                },
                {
                  id: "258",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/258.jpeg",
                  name: "Pawnshop Clerk",
                },
                {
                  id: "329",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/329.jpeg",
                  name: "Snuffles (Snowball)",
                },
                {
                  id: "376",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/376.jpeg",
                  name: "Veronica Ann Bennet",
                },
                {
                  id: "401",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/401.jpeg",
                  name: "Morty Jr's interviewer",
                },
              ],
            },
            {
              id: "8",
              name: "Rixty Minutes",
              episode: "S01E08",
              airDate: "March 17, 2014",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "3",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "4",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "5",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "20",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
                  name: "Ants in my Eyes Johnson",
                },
                {
                  id: "28",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/28.jpeg",
                  name: "Attila Starwar",
                },
                {
                  id: "29",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/29.jpeg",
                  name: "Baby Legs",
                },
                {
                  id: "34",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/34.jpeg",
                  name: "Benjamin",
                },
                {
                  id: "37",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/37.jpeg",
                  name: "Beth Sanchez",
                },
                {
                  id: "54",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/54.jpeg",
                  name: "Bobby Moynihan",
                },
                {
                  id: "88",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/88.jpeg",
                  name: "Cynthia",
                },
                {
                  id: "91",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/91.jpeg",
                  name: "David Letterman",
                },
                {
                  id: "129",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/129.jpeg",
                  name: "Fulgora",
                },
                {
                  id: "134",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/134.jpeg",
                  name: "Garmanarnar",
                },
                {
                  id: "136",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/136.jpeg",
                  name: "Gazorpazorpfield",
                },
                {
                  id: "145",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/145.jpeg",
                  name: "Glenn",
                },
                {
                  id: "153",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/153.jpeg",
                  name: "Hamster In Butt",
                },
                {
                  id: "157",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/157.jpeg",
                  name: "Hole in the Wall Where the Men Can See it All",
                },
                {
                  id: "176",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/176.jpeg",
                  name: "Celebrity Jerry",
                },
                {
                  id: "183",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
                  name: "Johnny Depp",
                },
                {
                  id: "184",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/184.jpeg",
                  name: "Jon",
                },
                {
                  id: "195",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/195.jpeg",
                  name: "Kristen Stewart",
                },
                {
                  id: "207",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/207.jpeg",
                  name: "Loggins",
                },
                {
                  id: "214",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/214.jpeg",
                  name: "Man Painted Silver Who Makes Robot Noises",
                },
                {
                  id: "222",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/222.jpeg",
                  name: "Michael Denny and the Denny Singers",
                },
                {
                  id: "250",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/250.jpeg",
                  name: "Mrs. Sullivan",
                },
                {
                  id: "266",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/266.jpeg",
                  name: "Piece of Toast",
                },
                {
                  id: "277",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/277.jpeg",
                  name: "Real Fake Doors Salesman",
                },
                {
                  id: "279",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/279.jpeg",
                  name: "Regular Legs",
                },
                {
                  id: "314",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/314.jpeg",
                  name: "Shmlamantha Shmlicelli",
                },
                {
                  id: "315",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/315.jpeg",
                  name: "Shmlangela Shmlobinson-Shmlower",
                },
                {
                  id: "316",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/316.jpeg",
                  name: "Shmlona Shmlobinson",
                },
                {
                  id: "317",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/317.jpeg",
                  name: "Shmlonathan Shmlower",
                },
                {
                  id: "318",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/318.jpeg",
                  name: "Shmlony Shmlicelli",
                },
                {
                  id: "351",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/351.jpeg",
                  name: "Three Unknown Things",
                },
                {
                  id: "358",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/358.jpeg",
                  name: "Tophat Jones",
                },
                {
                  id: "367",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/367.jpeg",
                  name: "Trunk Man",
                },
                {
                  id: "370",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/370.jpeg",
                  name: "Two Guys with Handlebar Mustaches",
                },
                {
                  id: "373",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/373.jpeg",
                  name: "Unmuscular Michael",
                },
                {
                  id: "402",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/402.jpeg",
                  name: "Guy from The Bachelor",
                },
                {
                  id: "403",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/403.jpeg",
                  name: "Corn detective",
                },
                {
                  id: "404",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/404.jpeg",
                  name: "Michael Jackson",
                },
                {
                  id: "405",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/405.jpeg",
                  name: "Trunkphobic suspenders guy",
                },
                {
                  id: "406",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/406.jpeg",
                  name: "Spiderweb teddy bear",
                },
                {
                  id: "407",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/407.jpeg",
                  name: "Regular Tyrion Lannister",
                },
                {
                  id: "408",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/408.jpeg",
                  name: "Quick Mystery Presenter",
                },
                {
                  id: "409",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/409.jpeg",
                  name: "Mr. Sneezy",
                },
                {
                  id: "410",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/410.jpeg",
                  name: "Two Brothers",
                },
                {
                  id: "411",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/411.jpeg",
                  name: "Alien Mexican Armada",
                },
                {
                  id: "412",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/412.jpeg",
                  name: "Giant Cat Monster",
                },
                {
                  id: "413",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/413.jpeg",
                  name: "Old Women",
                },
                {
                  id: "414",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/414.jpeg",
                  name: "Trunkphobic guy",
                },
                {
                  id: "415",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/415.jpeg",
                  name: "Pro trunk people marriage guy",
                },
                {
                  id: "416",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/416.jpeg",
                  name: "Muscular Mannie",
                },
                {
                  id: "417",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/417.jpeg",
                  name: "Baby Legs Chief",
                },
                {
                  id: "418",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/418.jpeg",
                  name: "Mrs. Sullivan's Boyfriend",
                },
              ],
            },
            {
              id: "9",
              name: "Something Ricked This Way Comes",
              episode: "S01E09",
              airDate: "March 24, 2014",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "3",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "4",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "5",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "88",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/88.jpeg",
                  name: "Cynthia",
                },
                {
                  id: "192",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/192.jpeg",
                  name: "King Flippy Nips",
                },
                {
                  id: "240",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/240.jpeg",
                  name: "Mr. Goldenfold",
                },
                {
                  id: "243",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/243.jpeg",
                  name: "Mr. Needful",
                },
                {
                  id: "251",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/251.jpeg",
                  name: "Nancy",
                },
                {
                  id: "272",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/272.jpeg",
                  name: "Principal Vagina",
                },
                {
                  id: "307",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/307.jpeg",
                  name: "Scroopy Noopers",
                },
                {
                  id: "419",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/419.jpeg",
                  name: "Plutonian Hostess",
                },
                {
                  id: "420",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/420.jpeg",
                  name: "Plutonian Host",
                },
                {
                  id: "421",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/421.jpeg",
                  name: "Rich Plutonian",
                },
                {
                  id: "422",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/422.jpeg",
                  name: "Rich Plutonian",
                },
                {
                  id: "826",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/826.jpeg",
                  name: "Butter Robot",
                },
              ],
            },
            {
              id: "10",
              name: "Close Rick-counters of the Rick Kind",
              episode: "S01E10",
              airDate: "April 7, 2014",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "3",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "4",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "5",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "7",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
                  name: "Abradolf Lincler",
                },
                {
                  id: "14",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
                  name: "Alien Morty",
                },
                {
                  id: "15",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
                  name: "Alien Rick",
                },
                {
                  id: "18",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
                  name: "Antenna Morty",
                },
                {
                  id: "19",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
                  name: "Antenna Rick",
                },
                {
                  id: "21",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
                  name: "Aqua Morty",
                },
                {
                  id: "22",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
                  name: "Aqua Rick",
                },
                {
                  id: "27",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/27.jpeg",
                  name: "Artist Morty",
                },
                {
                  id: "39",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/39.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "53",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/53.jpeg",
                  name: "Blue Shirt Morty",
                },
                {
                  id: "77",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/77.jpeg",
                  name: "Cowboy Morty",
                },
                {
                  id: "78",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/78.jpeg",
                  name: "Cowboy Rick",
                },
                {
                  id: "79",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/79.jpeg",
                  name: "Crab Spider",
                },
                {
                  id: "82",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/82.jpeg",
                  name: "Cronenberg Rick",
                },
                {
                  id: "83",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/83.jpeg",
                  name: "Cronenberg Morty",
                },
                {
                  id: "84",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/84.jpeg",
                  name: "Cult Leader Morty",
                },
                {
                  id: "85",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/85.jpeg",
                  name: "Cyclops Morty",
                },
                {
                  id: "86",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/86.jpeg",
                  name: "Cyclops Rick",
                },
                {
                  id: "103",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/103.jpeg",
                  name: "Doofus Rick",
                },
                {
                  id: "113",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/113.jpeg",
                  name: "Eric Stoltz Mask Morty",
                },
                {
                  id: "118",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/118.jpeg",
                  name: "Evil Morty",
                },
                {
                  id: "119",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/119.jpeg",
                  name: "Evil Rick",
                },
                {
                  id: "152",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/152.jpeg",
                  name: "Hammerhead Morty",
                },
                {
                  id: "164",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/164.jpeg",
                  name: "Insurance Rick",
                },
                {
                  id: "177",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/177.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "209",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/209.jpeg",
                  name: "Long Sleeved Morty",
                },
                {
                  id: "215",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/215.jpeg",
                  name: "Maximums Rickimus",
                },
                {
                  id: "232",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/232.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "242",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/242.jpeg",
                  name: "Mr. Meeseeks",
                },
                {
                  id: "274",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/274.jpeg",
                  name: "Quantum Rick",
                },
                {
                  id: "290",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/290.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "294",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/294.jpeg",
                  name: "Ricktiminus Sancheziminius",
                },
                {
                  id: "295",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/295.jpeg",
                  name: "Riq IV",
                },
                {
                  id: "298",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/298.jpeg",
                  name: "Robot Morty",
                },
                {
                  id: "299",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/299.jpeg",
                  name: "Robot Rick",
                },
                {
                  id: "329",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/329.jpeg",
                  name: "Snuffles (Snowball)",
                },
                {
                  id: "330",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/330.jpeg",
                  name: "Solicitor Rick",
                },
                {
                  id: "339",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/339.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "349",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/349.jpeg",
                  name: "The Scientist Formerly Known as Rick",
                },
                {
                  id: "359",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/359.jpeg",
                  name: "Tortured Morty",
                },
                {
                  id: "381",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/381.jpeg",
                  name: "Woman Rick",
                },
                {
                  id: "389",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/389.jpeg",
                  name: "Zeta Alpha Rick",
                },
                {
                  id: "405",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/405.jpeg",
                  name: "Trunkphobic suspenders guy",
                },
                {
                  id: "424",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/424.jpeg",
                  name: "Pizza-person",
                },
                {
                  id: "425",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/425.jpeg",
                  name: "Pizza-person",
                },
                {
                  id: "426",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/426.jpeg",
                  name: "Greasy Grandma",
                },
                {
                  id: "427",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/427.jpeg",
                  name: "Phone-person",
                },
                {
                  id: "428",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/428.jpeg",
                  name: "Phone-person",
                },
                {
                  id: "429",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/429.jpeg",
                  name: "Chair-person",
                },
                {
                  id: "430",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/430.jpeg",
                  name: "Chair-person",
                },
                {
                  id: "431",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/431.jpeg",
                  name: "Chair-homeless",
                },
                {
                  id: "432",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/432.jpeg",
                  name: "Chair-waiter",
                },
                {
                  id: "433",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/433.jpeg",
                  name: "Doopidoo",
                },
                {
                  id: "434",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/434.jpeg",
                  name: "Super Weird Rick",
                },
                {
                  id: "663",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/663.jpeg",
                  name: "Reggie",
                },
              ],
            },
            {
              id: "11",
              name: "Ricksy Business",
              episode: "S01E11",
              airDate: "April 14, 2014",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "3",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "4",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "5",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "7",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
                  name: "Abradolf Lincler",
                },
                {
                  id: "35",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/35.jpeg",
                  name: "Bepisian",
                },
                {
                  id: "47",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/47.jpeg",
                  name: "Birdperson",
                },
                {
                  id: "58",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/58.jpeg",
                  name: "Brad",
                },
                {
                  id: "88",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/88.jpeg",
                  name: "Cynthia",
                },
                {
                  id: "180",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/180.jpeg",
                  name: "Jessica",
                },
                {
                  id: "181",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/181.jpeg",
                  name: "Jessica's Friend",
                },
                {
                  id: "210",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/210.jpeg",
                  name: "Lucy",
                },
                {
                  id: "216",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/216.jpeg",
                  name: "MC Haps",
                },
                {
                  id: "251",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/251.jpeg",
                  name: "Nancy",
                },
                {
                  id: "282",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/282.jpeg",
                  name: "Revolio Clockberg Jr.",
                },
                {
                  id: "295",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/295.jpeg",
                  name: "Riq IV",
                },
                {
                  id: "308",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/308.jpeg",
                  name: "Scropon",
                },
                {
                  id: "326",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/326.jpeg",
                  name: "Slippery Stair",
                },
                {
                  id: "327",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/327.jpeg",
                  name: "Slow Mobius",
                },
                {
                  id: "331",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/331.jpeg",
                  name: "Squanchy",
                },
                {
                  id: "333",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/333.jpeg",
                  name: "Stair Goblin",
                },
                {
                  id: "344",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/344.jpeg",
                  name: "Tammy Guetermann",
                },
                {
                  id: "362",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/362.jpeg",
                  name: "Traflorkian",
                },
                {
                  id: "389",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/389.jpeg",
                  name: "Zeta Alpha Rick",
                },
                {
                  id: "395",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/395.jpeg",
                  name: "Greebybobe",
                },
                {
                  id: "405",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/405.jpeg",
                  name: "Trunkphobic suspenders guy",
                },
                {
                  id: "423",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/423.jpeg",
                  name: "Synthetic Laser Eels",
                },
                {
                  id: "435",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/435.jpeg",
                  name: "Pripudlian",
                },
                {
                  id: "436",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/436.jpeg",
                  name: "Giant Testicle Monster",
                },
              ],
            },
            {
              id: "12",
              name: "A Rickle in Time",
              episode: "S02E01",
              airDate: "July 26, 2015",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "3",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "4",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "5",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "11",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
                  name: "Albert Einstein",
                },
                {
                  id: "64",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/64.jpeg",
                  name: "Chris",
                },
                {
                  id: "237",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/237.jpeg",
                  name: "Mr. Benson",
                },
                {
                  id: "313",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/313.jpeg",
                  name: "Shleemypants",
                },
                {
                  id: "437",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/437.jpeg",
                  name: "Michael",
                },
                {
                  id: "438",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/438.jpeg",
                  name: "Michael's Lawyer",
                },
                {
                  id: "439",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/439.jpeg",
                  name: "Veterinary",
                },
                {
                  id: "440",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/440.jpeg",
                  name: "Veterinary Nurse",
                },
              ],
            },
            {
              id: "13",
              name: "Mortynight Run",
              episode: "S02E02",
              airDate: "August 2, 2015",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "5",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "23",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/23.jpeg",
                  name: "Arcade Alien",
                },
                {
                  id: "28",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/28.jpeg",
                  name: "Attila Starwar",
                },
                {
                  id: "34",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/34.jpeg",
                  name: "Benjamin",
                },
                {
                  id: "106",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/106.jpeg",
                  name: "Dr. Schmidt",
                },
                {
                  id: "122",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/122.jpeg",
                  name: "Fart",
                },
                {
                  id: "129",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/129.jpeg",
                  name: "Fulgora",
                },
                {
                  id: "131",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/131.jpeg",
                  name: "Gar Gloonch",
                },
                {
                  id: "133",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/133.jpeg",
                  name: "Garblovian",
                },
                {
                  id: "136",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/136.jpeg",
                  name: "Gazorpazorpfield",
                },
                {
                  id: "174",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/174.jpeg",
                  name: "Jerry 5-126",
                },
                {
                  id: "180",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/180.jpeg",
                  name: "Jessica",
                },
                {
                  id: "196",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/196.jpeg",
                  name: "Krombopulos Michael",
                },
                {
                  id: "207",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/207.jpeg",
                  name: "Loggins",
                },
                {
                  id: "242",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/242.jpeg",
                  name: "Mr. Meeseeks",
                },
                {
                  id: "257",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/257.jpeg",
                  name: "Paul Fleishman",
                },
                {
                  id: "282",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/282.jpeg",
                  name: "Revolio Clockberg Jr.",
                },
                {
                  id: "309",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/309.jpeg",
                  name: "Scrotian",
                },
                {
                  id: "311",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/311.jpeg",
                  name: "Shimshamian",
                },
                {
                  id: "362",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/362.jpeg",
                  name: "Traflorkian",
                },
                {
                  id: "386",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/386.jpeg",
                  name: "Zarbadar Gloonch",
                },
                {
                  id: "393",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/393.jpeg",
                  name: "Roy",
                },
                {
                  id: "436",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/436.jpeg",
                  name: "Giant Testicle Monster",
                },
                {
                  id: "441",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/441.jpeg",
                  name: "Bearded Jerry",
                },
                {
                  id: "442",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/442.jpeg",
                  name: "Shaved Head Jerry",
                },
                {
                  id: "443",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/443.jpeg",
                  name: "Tank Top Jerry",
                },
                {
                  id: "444",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/444.jpeg",
                  name: "Pink Polo Shirt Jerry",
                },
                {
                  id: "445",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/445.jpeg",
                  name: "Jerryboree Keeper",
                },
                {
                  id: "446",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/446.jpeg",
                  name: "Jerryboree Receptionist",
                },
                {
                  id: "447",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/447.jpeg",
                  name: "Anchor Gear",
                },
                {
                  id: "448",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/448.jpeg",
                  name: "Gear Cop",
                },
                {
                  id: "449",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/449.jpeg",
                  name: "Roy's Mum",
                },
                {
                  id: "450",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/450.jpeg",
                  name: "Roy's Wife",
                },
                {
                  id: "451",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/451.jpeg",
                  name: "Roy's Son",
                },
              ],
            },
            {
              id: "14",
              name: "Auto Erotic Assimilation",
              episode: "S02E03",
              airDate: "August 9, 2015",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "3",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "4",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "5",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "36",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/36.jpeg",
                  name: "Beta-Seven",
                },
                {
                  id: "50",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/50.jpeg",
                  name: "Blim Blam",
                },
                {
                  id: "90",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/90.jpeg",
                  name: "Daron Jefferson",
                },
                {
                  id: "188",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/188.jpeg",
                  name: "Karen Entity",
                },
                {
                  id: "249",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/249.jpeg",
                  name: "Mrs. Sanchez",
                },
                {
                  id: "301",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/301.jpeg",
                  name: "Ron Benson",
                },
                {
                  id: "336",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/336.jpeg",
                  name: "Steven Phillips",
                },
                {
                  id: "355",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/355.jpeg",
                  name: "Todd Crystal",
                },
                {
                  id: "372",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/372.jpeg",
                  name: "Unity",
                },
              ],
            },
            {
              id: "15",
              name: "Total Rickall",
              episode: "S02E04",
              airDate: "August 16, 2015",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "3",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "4",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "5",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "16",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
                  name: "Amish Cyborg",
                },
                {
                  id: "31",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/31.jpeg",
                  name: "Baby Wizard",
                },
                {
                  id: "32",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/32.jpeg",
                  name: "Bearded Lady",
                },
                {
                  id: "76",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/76.jpeg",
                  name: "Cousin Nicky",
                },
                {
                  id: "109",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/109.jpeg",
                  name: "Duck With Muscles",
                },
                {
                  id: "128",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/128.jpeg",
                  name: "Frankenstein's Monster",
                },
                {
                  id: "141",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/141.jpeg",
                  name: "Ghost in a Jar",
                },
                {
                  id: "154",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/154.jpeg",
                  name: "Hamurai",
                },
                {
                  id: "169",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/169.jpeg",
                  name: "Jacob",
                },
                {
                  id: "236",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/236.jpeg",
                  name: "Mr. Beauregard",
                },
                {
                  id: "244",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/244.jpeg",
                  name: "Mr. Poopybutthole",
                },
                {
                  id: "248",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/248.jpeg",
                  name: "Mrs. Refrigerator",
                },
                {
                  id: "259",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/259.jpeg",
                  name: "Pencilvester",
                },
                {
                  id: "262",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/262.jpeg",
                  name: "Photography Raptor",
                },
                {
                  id: "280",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/280.jpeg",
                  name: "Reverse Giraffe",
                },
                {
                  id: "324",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/324.jpeg",
                  name: "Sleepy Gary",
                },
                {
                  id: "329",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/329.jpeg",
                  name: "Snuffles (Snowball)",
                },
                {
                  id: "352",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/352.jpeg",
                  name: "Tinkles",
                },
                {
                  id: "391",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/391.jpeg",
                  name: "Uncle Steve",
                },
              ],
            },
            {
              id: "16",
              name: "Get Schwifty",
              episode: "S02E05",
              airDate: "August 23, 2015",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "3",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "4",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "5",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "24",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/24.jpeg",
                  name: "Armagheadon",
                },
                {
                  id: "47",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/47.jpeg",
                  name: "Birdperson",
                },
                {
                  id: "115",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/115.jpeg",
                  name: "Ethan",
                },
                {
                  id: "124",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/124.jpeg",
                  name: "Father Bob",
                },
                {
                  id: "138",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/138.jpeg",
                  name: "General Nathan",
                },
                {
                  id: "161",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/161.jpeg",
                  name: "Hydrogen-F",
                },
                {
                  id: "162",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/162.jpeg",
                  name: "Ice-T",
                },
                {
                  id: "172",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/172.jpeg",
                  name: "Jamey",
                },
                {
                  id: "182",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/182.jpeg",
                  name: "Jim",
                },
                {
                  id: "199",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/199.jpeg",
                  name: "Larva Alien",
                },
                {
                  id: "212",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/212.jpeg",
                  name: "Magma-Q",
                },
                {
                  id: "213",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/213.jpeg",
                  name: "Magnesium-J",
                },
                {
                  id: "240",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/240.jpeg",
                  name: "Mr. Goldenfold",
                },
                {
                  id: "241",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/241.jpeg",
                  name: "Mr. Marklovitz",
                },
                {
                  id: "253",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/253.jpeg",
                  name: "Numbericon",
                },
                {
                  id: "255",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/255.jpeg",
                  name: "Orthodox Jew",
                },
                {
                  id: "272",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/272.jpeg",
                  name: "Principal Vagina",
                },
                {
                  id: "309",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/309.jpeg",
                  name: "Scrotian",
                },
                {
                  id: "329",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/329.jpeg",
                  name: "Snuffles (Snowball)",
                },
                {
                  id: "331",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/331.jpeg",
                  name: "Squanchy",
                },
                {
                  id: "344",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/344.jpeg",
                  name: "Tammy Guetermann",
                },
                {
                  id: "346",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/346.jpeg",
                  name: "Terry",
                },
                {
                  id: "347",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/347.jpeg",
                  name: "President Curtis",
                },
                {
                  id: "395",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/395.jpeg",
                  name: "Greebybobe",
                },
                {
                  id: "452",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/452.jpeg",
                  name: "Simon",
                },
                {
                  id: "454",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/454.jpeg",
                  name: "Arbolian Mentirososian",
                },
              ],
            },
            {
              id: "17",
              name: "The Ricks Must Be Crazy",
              episode: "S02E06",
              airDate: "August 30, 2015",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "3",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "28",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/28.jpeg",
                  name: "Attila Starwar",
                },
                {
                  id: "34",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/34.jpeg",
                  name: "Benjamin",
                },
                {
                  id: "65",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/65.jpeg",
                  name: "Chris",
                },
                {
                  id: "129",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/129.jpeg",
                  name: "Fulgora",
                },
                {
                  id: "159",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/159.jpeg",
                  name: "Hunter",
                },
                {
                  id: "160",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/160.jpeg",
                  name: "Hunter's Father",
                },
                {
                  id: "180",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/180.jpeg",
                  name: "Jessica",
                },
                {
                  id: "181",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/181.jpeg",
                  name: "Jessica's Friend",
                },
                {
                  id: "197",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/197.jpeg",
                  name: "Kyle",
                },
                {
                  id: "207",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/207.jpeg",
                  name: "Loggins",
                },
                {
                  id: "240",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/240.jpeg",
                  name: "Mr. Goldenfold",
                },
                {
                  id: "266",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/266.jpeg",
                  name: "Piece of Toast",
                },
                {
                  id: "348",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/348.jpeg",
                  name: "The President of the Miniverse",
                },
                {
                  id: "364",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/364.jpeg",
                  name: "Tree Person",
                },
                {
                  id: "388",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/388.jpeg",
                  name: "Zeep Xanflorp",
                },
                {
                  id: "753",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/753.jpeg",
                  name: "Space Cruiser",
                },
              ],
            },
            {
              id: "18",
              name: "Big Trouble in Little Sanchez",
              episode: "S02E07",
              airDate: "September 13, 2015",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "3",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "4",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "5",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "40",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/40.jpeg",
                  name: "Beth's Mytholog",
                },
                {
                  id: "55",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/55.jpeg",
                  name: "Boobloosian",
                },
                {
                  id: "66",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/66.jpeg",
                  name: "Coach Feratu (Balik Alistane)",
                },
                {
                  id: "131",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/131.jpeg",
                  name: "Gar Gloonch",
                },
                {
                  id: "132",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/132.jpeg",
                  name: "Gar's Mytholog",
                },
                {
                  id: "146",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/146.jpeg",
                  name: "Glexo Slim Slom",
                },
                {
                  id: "148",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/148.jpeg",
                  name: "Goddess Beth",
                },
                {
                  id: "163",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/163.jpeg",
                  name: "Ideal Jerry",
                },
                {
                  id: "178",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/178.jpeg",
                  name: "Jerry's Mytholog",
                },
                {
                  id: "180",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/180.jpeg",
                  name: "Jessica",
                },
                {
                  id: "181",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/181.jpeg",
                  name: "Jessica's Friend",
                },
                {
                  id: "240",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/240.jpeg",
                  name: "Mr. Goldenfold",
                },
                {
                  id: "272",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/272.jpeg",
                  name: "Principal Vagina",
                },
                {
                  id: "310",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/310.jpeg",
                  name: "Self-Congratulatory Jerry",
                },
                {
                  id: "353",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/353.jpeg",
                  name: "Tiny Rick",
                },
                {
                  id: "354",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/354.jpeg",
                  name: "Toby Matthews",
                },
                {
                  id: "358",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/358.jpeg",
                  name: "Tophat Jones",
                },
                {
                  id: "374",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/374.jpeg",
                  name: "Vampire Master",
                },
                {
                  id: "386",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/386.jpeg",
                  name: "Zarbadar Gloonch",
                },
                {
                  id: "387",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/387.jpeg",
                  name: "Zarbadar's Mytholog",
                },
                {
                  id: "453",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/453.jpeg",
                  name: "Vampire Master's Assistant",
                },
              ],
            },
            {
              id: "19",
              name: "Interdimensional Cable 2: Tempting Fate",
              episode: "S02E08",
              airDate: "September 20, 2015",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "3",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "4",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "5",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "23",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/23.jpeg",
                  name: "Arcade Alien",
                },
                {
                  id: "35",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/35.jpeg",
                  name: "Bepisian",
                },
                {
                  id: "49",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/49.jpeg",
                  name: "Blamph",
                },
                {
                  id: "51",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/51.jpeg",
                  name: "Blue Diplomat",
                },
                {
                  id: "105",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/105.jpeg",
                  name: "Dr. Glip-Glop",
                },
                {
                  id: "121",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/121.jpeg",
                  name: "Eyehole Man",
                },
                {
                  id: "126",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/126.jpeg",
                  name: "Fleeb",
                },
                {
                  id: "133",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/133.jpeg",
                  name: "Garblovian",
                },
                {
                  id: "153",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/153.jpeg",
                  name: "Hamster In Butt",
                },
                {
                  id: "173",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/173.jpeg",
                  name: "Jan-Michael Vincent",
                },
                {
                  id: "199",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/199.jpeg",
                  name: "Larva Alien",
                },
                {
                  id: "205",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/205.jpeg",
                  name: "Little Dipper",
                },
                {
                  id: "223",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/223.jpeg",
                  name: "Michael Jenkins",
                },
                {
                  id: "224",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/224.jpeg",
                  name: "Michael McLick",
                },
                {
                  id: "225",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/225.jpeg",
                  name: "Michael Thompson",
                },
                {
                  id: "254",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/254.jpeg",
                  name: "Octopus Man",
                },
                {
                  id: "260",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/260.jpeg",
                  name: "Phillip Jacobs",
                },
                {
                  id: "263",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/263.jpeg",
                  name: "Pibbles Bodyguard",
                },
                {
                  id: "264",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/264.jpeg",
                  name: "Pichael Thompson",
                },
                {
                  id: "275",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/275.jpeg",
                  name: "Randy Dicknose",
                },
                {
                  id: "312",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/312.jpeg",
                  name: "Shlaammi",
                },
                {
                  id: "321",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/321.jpeg",
                  name: "Shrimply Pibbles",
                },
                {
                  id: "334",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/334.jpeg",
                  name: "Stealy",
                },
                {
                  id: "362",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/362.jpeg",
                  name: "Traflorkian",
                },
                {
                  id: "371",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/371.jpeg",
                  name: "Tumblorkian",
                },
                {
                  id: "383",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/383.jpeg",
                  name: "Yaarb",
                },
                {
                  id: "384",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/384.jpeg",
                  name: "Yellow Headed Doctor",
                },
                {
                  id: "435",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/435.jpeg",
                  name: "Pripudlian",
                },
                {
                  id: "454",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/454.jpeg",
                  name: "Arbolian Mentirososian",
                },
                {
                  id: "455",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/455.jpeg",
                  name: "St. Gloopy Noops Nurse",
                },
                {
                  id: "456",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/456.jpeg",
                  name: "Nano Doctor",
                },
                {
                  id: "457",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/457.jpeg",
                  name: "Funny Songs Presenter",
                },
                {
                  id: "458",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/458.jpeg",
                  name: "Tax Attorney",
                },
                {
                  id: "459",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/459.jpeg",
                  name: "Butthole Ice Cream Guy",
                },
                {
                  id: "460",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/460.jpeg",
                  name: "Traflorkian Journalist",
                },
              ],
            },
            {
              id: "20",
              name: "Look Who's Purging Now",
              episode: "S02E09",
              airDate: "September 27, 2015",
              characters: [
                {
                  id: "1",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  name: "Rick Sanchez",
                },
                {
                  id: "2",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  name: "Morty Smith",
                },
                {
                  id: "3",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                  name: "Summer Smith",
                },
                {
                  id: "4",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                  name: "Beth Smith",
                },
                {
                  id: "5",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                  name: "Jerry Smith",
                },
                {
                  id: "26",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/26.jpeg",
                  name: "Arthricia",
                },
                {
                  id: "139",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/139.jpeg",
                  name: "General Store Owner",
                },
                {
                  id: "202",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/202.jpeg",
                  name: "Lighthouse Keeper",
                },
                {
                  id: "273",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/273.jpeg",
                  name: "Purge Planet Ruler",
                },
                {
                  id: "341",
                  image:
                    "https://rickandmortyapi.com/api/character/avatar/341.jpeg",
                  name: "Taddy Mason",
                },
              ],
            },
          ],
        },
      },
    },
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
