interface MovieState {
  loading: {
    movie: boolean;
    detail: boolean;
  };
  error: {
    movieErr: any | null;
    detailErr: any | null;
  };
  movies: MovieData[] | null;
  details: TitleData | null;
}

interface MovieParams {
  search: string;
  page?: number;
}
