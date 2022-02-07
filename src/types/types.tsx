type ResponseType<R> = {
  res: R;
};

export namespace RickAndMorty {
  export interface Character {
    id: string;
    image: string;
    name: string;
  }

  export interface Episode {
    id: string;
    name: string;
    episode: string;
    airDate: string;
    characters: Character[];
  }

  export interface FetchEpisodesResponse
    extends ResponseType<{ results: Episode[] }> {}

  //  Узнать и исправить.
  export interface CharacterData {
    gender: string;
    image: string;
    name: string;
    species: string;
    status: string;
    origin: {
      name: string;
      type: string;
      dimension: string;
    };
  }
  // export interface CharacterDataVars {
  //   characterId: string;
  // }
  // export interface FetchCharacterResponse
  //   extends ResponseType<{ character: CharacterData }> {}
}
