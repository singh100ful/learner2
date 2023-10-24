interface Response {
  Response: boolean;
  Search: MovieData[];
}

interface MovieData {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}

interface TitleData {
  Poster: string;
  Title: string;
  Actors: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
}
