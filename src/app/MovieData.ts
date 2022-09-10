export interface MovieDataJSON{
  movies: Array<MovieData>;
}

export interface MovieData {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}