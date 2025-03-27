import { Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, View } from 'react-native';
import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { MovieCardExtended } from '../../components/Cards';
import { getArray } from '../../utils/getItem';

export default function FavouritesScreen({ navigation }: { navigation: any }) {
  const [favs, setFavs] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getArray('favourites').then((data) => {
        if (data) {setFavs(data);}
        setLoading(false);
      });
    }, [])
  );

  const loadMore = () => {
    if (visibleCount < favs.length) {
      setVisibleCount((prev) => prev + 5);
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.heading}>Favourites</Text>
      {favs.length === 0 ? (
        <Text style={styles.noDataText}>No favourites added!</Text>
      ) : (
        favs.slice(0, visibleCount).map((item, index) => (
          <MovieCardExtended imdbId={item} key={index} navigation={navigation} />
        ))
      )}
      {visibleCount < favs.length && (
        <TouchableOpacity style={styles.loadMoreBtn} onPress={loadMore}>
          <Text style={styles.loadMoreText}>Load More</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F29',
  },
  contentContainer: {
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  heading: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loadMoreBtn: {
    backgroundColor: '#444',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  loadMoreText: {
    color: 'white',
    fontSize: 16,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F1F29',
  },
  noDataText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
