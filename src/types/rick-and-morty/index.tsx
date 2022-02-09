type ResponseType<R> = {
  res: R;
};

export namespace RickAndMorty {
  export interface Characters {
    // id: string;
    image: string;
    name: string;
  }

  export interface Episode {
    id: string;
    name: string;
    episode: string;
    airDate: string;
    characters: Characters[];
  }

  export interface FetchEpisodesResponse
    extends ResponseType<{ results: Episode[] }> {}

  export interface Character {
    gender: string;
    image: string;
    name: string;
    species: string;
    status: string;
  }
  export interface CharacterVars {
    characterId: string;
  }
  export interface FetchCharacterResponse extends ResponseType<Character> {}
}
