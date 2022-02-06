
import React from "react";
import Layout from "../components/layout";
import {useQuery} from "@apollo/client";
import {RickAndMorty, GET_PAGE_CHARACTER} from "../types/types";
import ErrorPage from "./404";

interface Props { 
    location: any
}

const Characters = ({location} : Props) => {
    const id = location.state.id;

    const {loading, error, data} = useQuery(GET_PAGE_CHARACTER,
    { variables: { characterId: id } }
    ) ;
  
    const results = data && data.character;
    
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return  <ErrorPage />
    }

  return (
    <Layout>
        <div>
            <div> {results.name} </div>
            <div> {results.gender} </div>
            <div> {results.species} </div>
            <div> {results.status} </div>
            <div> 
                <img src={data.character.image} alt="character image" />
            </div>

        </div>
    </Layout>
  ) 
  
};

export default Characters;
