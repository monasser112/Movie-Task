import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import SingleMovie from "../Components/SingleMovie";

const MoviesList = ({ movies }) => {
  return (
    <View style={{ backgroundColor: "#273746", width: "100%", height: "100%" }}>
      <FlatList
        data={movies}
        numColumns={1}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.singleMovieWrapper}>
              <SingleMovie
                releasedata={item.release_date}
                movietitle={item.title}
                poster={item.poster_path}
                overview={item.overview}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  singleMovieWrapper: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default MoviesList;
