import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import MovieCard from "../components/ui/MovieCard";
import SearchInput from "../features/search/SearchInput";

const media = [
  {
    id: "1",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
    title: "The Lion King",
    category: "Animation",
    type: "movie",
    raiting: 4.3,
  },
  {
    id: "2",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
    title: "Avengers: Endgame",
    category: "Action",
    type: "movie",
    raiting: 4.8,
  },
  {
    id: "3",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg",
    title: "Black Panther",
    category: "Action",
    type: "movie",
    raiting: 4.4,
  },
  {
    id: "4",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg",
    title: "The Batman",
    category: "Thriller",
    type: "movie",
    raiting: 3.5,
  },
  {
    id: "5",
    poster:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png",
    title: "Stranger Things",
    category: "Sci-Fi",
    type: "tv",
    raiting: 4.1,
  },
  {
    id: "6",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg",
    title: "Game of Thrones",
    category: "Fantasy",
    type: "tv",
  },
  {
    id: "7",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmR1UfShiKt6vY3J9tjztfpJvB7qM3xIQ_-TUF25_zZYzoTfz",
    title: "Breaking Bad",
    category: "Crime",
    type: "tv",
    raiting: 1.4,
  },
  {
    id: "8",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    title: "Inception",
    category: "Sci-Fi",
    type: "movie",
    raiting: 2.4,
  },
];

const Index = () => {
  return (
    <LinearGradient colors={["#010430", "#01001d"]} style={styles.container}>
      <Text style={styles.text}>index</Text>
      <SearchInput />

      <Text style={styles.text}>Popular Movies</Text>

      <FlatList
        data={media}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MovieCard movie={item} key={item.id}  />}
        horizontal
        contentContainerStyle={styles.movieList}
      />
    </LinearGradient>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
  },
  movieList: {
    marginVertical: 20,
    gap: 20,
  },
});
