import { View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MovieCard } from '../../components/Cards';
import Icon from 'react-native-vector-icons/Ionicons';
import { MovieType } from '../../types/MovieType';

const API_KEY = 'c359d449';

export default function SearchScreen({ navigation }: { navigation: any }) {
  const [moviesList, setMoviesList] = useState<MovieType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (query: string) => {
    if (!query.trim()) {return;}
    setIsLoading(true);
    try {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      const data = await res.json();
      setMoviesList(data.Search || []);
      setVisibleCount(5);
    } catch (e) {
      console.error('Error fetching data:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchData(searchQuery);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const loadMore = () => {
    if (visibleCount < moviesList.length) {
      setVisibleCount((prev) => prev + 5);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.inputContainer}>
        <Icon name="search" size={24} color="#575B66" />
        <TextInput
          style={styles.textInput}
          placeholder="Search Movies"
          placeholderTextColor="#575B66"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="white" style={styles.loadingIndicator} />
      ) : (
        <>
          <View style={styles.gridContainer}>
            {moviesList.slice(0, visibleCount).map((item) => (
              <View key={item.imdbID} style={styles.movieWrapper}>
                <MovieCard navigation={navigation} imdbId={item.imdbID} />
              </View>
            ))}
          </View>

          {visibleCount < moviesList.length && (
            <TouchableOpacity style={styles.loadMoreBtn} onPress={loadMore}>
              <Text style={styles.loadMoreText}>Load More</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 20,
    backgroundColor: '#1F1F29',
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#131316',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 10,
    padding: 10,
  },
  textInput: {
    flex: 1,
    color: 'white',
    paddingLeft: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  movieWrapper: {
    width: '48%',
    marginBottom: 10,
  },
  loadMoreBtn: {
    backgroundColor: '#444',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  loadMoreText: {
    color: 'white',
    fontSize: 16,
  },
  loadingIndicator: {
    marginTop: 20,
  },
});
