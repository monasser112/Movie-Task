import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";

import SingleMovie from "../Components/SingleMovie";

const MoviesScreen = () => {
  const [MoviesResultsFromApi, setMoviesResults] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [ApiConnectionErrorMessage, setApiConnectionErrorMessage] =
    useState("");
  const [ApiError, setApiError] = useState(false);

  // to avoid virtualized List Waringing in flatList//
  const renderItem = useCallback(({ item }) => {
    return (
      <SingleMovie
        releasedata={item.release_date}
        movietitle={item.title}
        poster={item.poster_path}
        overview={item.overview}
      />
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getMoviesResults();
  }, [page]);

  const ListFooterComponent = () => (
    <View>
      <ActivityIndicator color="red" size="large" />
    </View>
  );

  handleLoadMore = () => {
    setPage(page + 1);
    setIsLoading(true);
  };

  const getMoviesResults = async () => {
    await fetch(`http://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989
e2&$page=${page}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Something is Wrong, Try Again");
        }
        return res.json();
      })
      .then((data) => {
        setMoviesResults(MoviesResultsFromApi.concat(data.results));
        setIsLoading(false);
        setApiError(false);
      })
      .catch((err) => {
        setApiConnectionErrorMessage(err.message);
        setApiError(true);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textCenter}>Movies List</Text>

      {!ApiError ? (
        <View style={styles.ListWrapper}>
          <FlatList
            bounces={false}
            initialNumToRender={10}
            windowSize={5}
            maxToRenderPerBatch={5}
            updateCellsBatchingPeriod={30}
            removeClippedSubviews={false}
            data={MoviesResultsFromApi}
            numColumns={1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            ListFooterComponent={isLoading && <ListFooterComponent />}
            ListFooterComponentStyle={{ marginBottom: 50, paddingTop: 2 }}
            onEndReached={() => handleLoadMore()}
            onEndReachedThreshold={0.1}
          />
        </View>
      ) : (
        <Text style={styles.errorMessageStyle}>
          {ApiConnectionErrorMessage}
        </Text>
      )}
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
  singleMovieWrapper: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  spinner: {
    alignItems: "center",
  },
  errorMessageStyle: {
    fontSize: 18,
    fontFamily: "Poppins_Bold",
    textAlign: "center",
  },
  ListWrapper: {
    backgroundColor: "#273746",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});
export default MoviesScreen;
