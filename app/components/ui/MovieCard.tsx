import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Movie {
  poster: string;
  title: string;
  category: string;
  type: string;
  raiting?: number;
}

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const { poster, title, category, type, raiting } = movie;

  return (
    <View style={styles.box}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: poster,
        }}
      />
      <View style={styles.raiting}>
        <Text style={styles.raitingText}>{raiting}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.h1}>{title}</Text>
        <Text style={styles.samllText}>
          {category} | {type}
        </Text>
      </View>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "",
    height: 214,
    width: 116,
    borderRadius: 6,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    height: "80%",
    width: "100%",
  },
  h1: {
    color: "#dddddd",
    fontSize: 12,
    fontWeight: "bold",
  },
  samllText: {
    fontSize: 10,
    color: "#888888",
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  raiting: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 26,
    height: 16,
    right: 4,
    top: 4,
    color: "#000000",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  raitingText: {
    fontSize: 10,
    fontWeight: "bold",
  },
});
