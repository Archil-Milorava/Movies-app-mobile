import API from "@/config/axiosConfig";
import { MoviesResponse } from "@/types/moviesTypes";

export const getLatestMovies = (): Promise<MoviesResponse> =>
  API.get("3/movie/now_playing?language=en-US&page=1");
export const getPopularMovies = (): Promise<MoviesResponse> =>
  API.get("3/movie/popular?language=en-US&page=23");