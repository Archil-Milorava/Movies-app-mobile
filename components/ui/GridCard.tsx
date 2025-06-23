import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { useRouter } from "expo-router";
import star from "../../assets/images/star.png";

interface Movie {
  poster: string;
  title: string;
  category: string;
  type: string;
  raiting?: number;
  id: string;
}

interface Props {
  movie: Movie;
}

const GridCard = ({ movie }: Props) => {
  const {id, poster, title, category, type, raiting } = movie;
  const router = useRouter()

  return (
    <Pressable onPress={() => router.push(`/SingleMovie/${id}`)} style={styles.box}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: poster,
        }}
      />
      <View style={styles.raiting}>
        <Image style={styles.starIcon} source={star} />
        <Text style={styles.raitingText}>{raiting}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.h1}>{title}</Text>
        <Text style={styles.samllText}>
          {category} | {type}
        </Text>
      </View>
    </Pressable>
  );
};

export default GridCard;

const styles = StyleSheet.create({
  box: {
    width: "30%",
    height: 216,
    borderRadius: 6,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "",
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
    backgroundColor: "#000c3f",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  raiting: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 30,
    height: 16,
    right: 4,
    top: 4,
    color: "#000000",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 0.5,
    borderRadius: 4,
    flexDirection: "row",
  },
  raitingText: {
    fontSize: 10,
    fontWeight: "bold",
  },
  starIcon: {
    height: 10,
    width: 10,
  },
});
