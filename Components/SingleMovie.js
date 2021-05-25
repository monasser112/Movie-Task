import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native";
import { useFonts } from "expo-font";

const SingleMovie = ({ movietitle, poster, releasedata, overview }) => {
  //

  return (
    <>
      <View style={styles.singleMovieSplitter}>
        <View style={styles.posterSection}>
          <Text style={styles.titleStyle}>{movietitle}</Text>
          <Image
            style={styles.image}
            source={{ uri: `http://image.tmdb.org/t/p/w500${poster}` }}
          />
          <Text style={styles.releaseDataStyle}>Release Date:</Text>
          <Text style={styles.releaseDataStyle}>{releasedata}</Text>
        </View>
        <View style={styles.contentSection}>
          <Text style={styles.textStyle}>OverView:</Text>
          <Text style={styles.Overview}>{overview}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 175,
    height: 250,
  },
  singleMovieSplitter: {
    display: "flex",
    flexDirection: "row",
  },
  posterSection: {
    flex: 1,
    marginVertical: 10,
    paddingVertical: 10,
  },
  textStyle: {
    fontSize: 20,
    paddingVertical: 5,
    color: "#FFCA00",

    fontFamily: "Poppins_Light",
  },
  contentSection: {
    flex: 1,
    marginVertical: 10,
    paddingVertical: 10,
    fontFamily: "Poppins_Bold",
    fontSize: 14,
  },
  Overview: {
    fontSize: 17,
    color: "white",
    fontFamily: "Poppins_Regular",
  },
  titleStyle: {
    fontFamily: "Poppins_Regular",
    fontSize: 20,
    paddingVertical: 5,
    color: "#FFCA00",
  },
  releaseDataStyle: {
    fontFamily: "Poppins_Bold",
    fontSize: 15,

    color: "#FFCA00",
  },
});

export default SingleMovie;
