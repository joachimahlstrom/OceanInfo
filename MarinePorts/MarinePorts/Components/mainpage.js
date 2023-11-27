import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const MainPage = () => {
  const imageUrl = "https://images.unsplash.com/photo-1543140313-318677635120?auto=format&fit=crop&q=80&w=2051&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl}}
        style={styles.backgroundImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.header}>OceanInfo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject, // Use this to cover the entire container
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    top: "30%", // Adjust the positioning here
    alignSelf: "center", // Align the container at the center horizontally
  },
  header: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    
  },
});

export default MainPage;
