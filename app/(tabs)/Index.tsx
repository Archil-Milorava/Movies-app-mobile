import GridCard from "@/components/ui/GridCard";
import {
  useGetLatestMovies,
  useGetPopularMovies,
} from "@/features/movies/moviesHook";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import MovieCard from "../../components/ui/MovieCard";
import SearchInput from "../../features/search/SearchInput";

const Index = () => {
  const {
    isLoading: latestLoading,
    error: latestError,
    latestMovies,
  } = useGetLatestMovies();
  const {
    isLoading: popularLoading,
    error: popularError,
    popularMovies,
  } = useGetPopularMovies();

  if (latestLoading || popularLoading) {
    return (
      <LinearGradient
        colors={["#010430", "#01001d"]}
        style={styles.loaderContainer}
      >
        <ActivityIndicator size="large" color="#fff" />
      </LinearGradient>
    );
  }
  if (latestError || popularError) {
    return (
      <LinearGradient
        colors={["#010430", "#01001d"]}
        style={styles.loaderContainer}
      >
        <Text style={{ color: "white" }}>
          {" "}
          {latestError?.message || popularError?.message}
        </Text>
      </LinearGradient>
    );
  }

  return (
    <ScrollView>
      <LinearGradient colors={["#010430", "#01001d"]} style={styles.container}>
        <SearchInput />
        <Text style={styles.textBig}>Latest Movies</Text>
        <FlatList
          data={latestMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MovieCard movie={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.movieList}
        />
        <Text style={styles.textBig}>Popular Movies</Text>
        <FlatList
          data={popularMovies}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          renderItem={({ item }) => <GridCard movie={item} />}
          scrollEnabled={false}
          contentContainerStyle={styles.gridContainer}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        />
      </LinearGradient>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  textBig: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  movieList: {
    marginBottom: 20,
    gap: 20,
    height: 220,
    overflow: "hidden",
  },
  gridContainer: {
    marginBottom: 100,
  },
  loaderContainer: {
    flex: 1,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
  },
});
