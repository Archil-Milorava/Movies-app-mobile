import { LinearGradient } from "expo-linear-gradient";
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
];

const Movie = () => {
  const { poster, title, category, raiting } = media[0];

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <LinearGradient
        colors={["#010430", "#01001d"]}
        style={styles.MainContainer}
      >
        <Image
          source={{ uri: poster }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.viewContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.rating}>Rating: {raiting}</Text>
        </View>

        <Text style={styles.overview}>Overview</Text>
        <Text style={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti
          alias quas amet voluptate quia vitae quo ipsum, similique labore quod
          consequuntur sapiente itaque omnis.
        </Text>

        <ScrollView horizontal style={styles.categoryScroll}>
          <Text style={styles.category}>{category}</Text>
        </ScrollView>
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
  image: {
    width: "100%",
    height: "50%",
    borderRadius: 5,
    overflow: "hidden",
  },
  viewContainer: {
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  rating: {
    fontSize: 16,
    color: "#ccc",
  },
  overview: {
    color: "#fff",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 4,
    fontWeight: "600",
  },
  description: {
    color: "#aaa",
    lineHeight: 20,
  },
  categoryScroll: {
    marginTop: 10,
  },
  category: {
    color: "#fff",
    fontSize: 16,
    paddingRight: 10,
  },
});
