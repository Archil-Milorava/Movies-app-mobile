import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

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

interface Movie {
  poster: string;
  title: string;
  category: string[];
  type: string;
  raiting?: number;
  id: string;
  description: string;
}

interface Props {
  movie: Movie;
}

const Movie = () => {
   const { id } = useLocalSearchParams();
  const movie = media.find((m) => m.id === id);

  if (!movie)
    return <Text style={{ color: "white", padding: 20 }}>Movie not found</Text>;

  const { poster, title, category, description } = movie;

  console.log(id);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <LinearGradient
        colors={["#010430", "#01001d"]}
        style={styles.MainContainer}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: poster }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.head}>2024 | PG-13 | 2h 46m</Text>
          <Text style={styles.smallHead}>Overview</Text>
          <Text style={styles.description}>{description}</Text>

          <Text style={styles.smallHead}>Genres</Text>
          <View style={styles.flexContainer}>
            {/* <View style={styles.flexContainer}>
              {category.map((category, i) => (
                <Text key={i} style={styles.genre}>
                  {category}
                </Text>
              ))}
            </View> */}
          </View>
          <Text style={styles.smallHead}>Countries</Text>
          <View style={styles.flexContainer}>
            <Text style={styles.countries}>
              United states | Canada | UAE | Hungary | Italy | New Zealand
            </Text>
          </View>
          <View style={styles.flexContainer}>
            <View>
              <Text style={styles.smallHead}>Budget</Text>
              <Text style={styles.budget}> $21.4 million</Text>
            </View>
            <View>
              <Text style={styles.smallHead}>Revenue</Text>
              <Text style={styles.revenue}> $900 Million</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Movie;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  MainContainer: {
    flex: 1,
    gap: 10,
  },
  imageContainer: {
    height: 447,
    borderEndEndRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  informationContainer: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "column",
    gap: 5,
    paddingBottom: 100,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  head: {
    color: "#A8B5DB",
    fontSize: 14,
  },
  smallHead: {
    color: "#A8B5DB",
    fontSize: 12,
    marginTop: 15,
  },
  description: {
    color: "#fff",
    textAlign: "justify",
    lineHeight: 20,
  },
  flexContainer: {
    flexDirection: "row",
    height: "auto",
    gap: 5,
  },
  genre: {
    backgroundColor: "#221F3D",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
  },
  countries: {
    color: "#D6C7FF",
    fontSize: 14,
  },
  budget: {
    color: "#D6C7FF",
    fontSize: 14,
  },
  revenue: {
    color: "#D6C7FF",
    fontSize: 14,
  },
});
