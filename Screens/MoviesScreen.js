import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MoviesList from "../Components/MoviesList";
import axios from "axios";
const MoviesScreen = () => {
  const [MoviesResultsFromApi, setMoviesResults] = useState([]);
  const getMoviesResults = async () => {
    const response =
      await axios.get(`http://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989
e2&p
age=1`);
    let Movies = response.data.results;
    setMoviesResults(Movies);
  };

  useEffect(() => {
    getMoviesResults();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textCenter}>Movies List</Text>
      <MoviesList movies={MoviesResultsFromApi} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  textCenter: {
    fontFamily: "Poppins_Bold",
    textAlign: "center",
    fontSize: 26,
    backgroundColor: "#273746",
    color: "#FFCA00",
  },
});
export default MoviesScreen;
