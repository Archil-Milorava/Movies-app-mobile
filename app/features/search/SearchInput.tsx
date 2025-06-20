import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="search..."
        placeholderTextColor="#b3b3b3"
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  input: {
    backgroundColor: "#09154b",
    width: 300,
    borderRadius: 100,
    paddingHorizontal: 10,
    fontSize: 12,
    letterSpacing: 0.5,
    color: "#dddddd",
  },
});
