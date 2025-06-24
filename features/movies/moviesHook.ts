import { getLatestMovies, getPopularMovies } from "@/api/moviesAPI";
import { useQuery } from "@tanstack/react-query";

export const useGetLatestMovies = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["latestMovies"],
    queryFn: () => getLatestMovies(),
  });

  const latestMovies = data?.results;

  return { latestMovies, error, isLoading };
};

export const useGetPopularMovies = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: () => getPopularMovies(),
  });

  const popularMovies = data?.results;

  return { popularMovies, error, isLoading };
};
