/* eslint-disable react-hooks/exhaustive-deps */
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { MovieType } from '../../types/MovieType';

export default function MovieCardExtended({ imdbId, navigation }: { imdbId: string, navigation: any }) {
  const [data, setData] = useState<MovieType>();

  const fetchData = async () => {
    try {
      const res = await fetch(`http://www.omdbapi.com/?apikey=c359d449&i=${imdbId}`);
      const response = await res.json();
      setData(response);
      console.log(response);
    } catch (e) {
      console.log('Error fetching data2:', e);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, [imdbId]);
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('AboutMovie', { imdbId: imdbId })}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: data?.Poster }}
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{data?.Title}</Text>
        <Text style={styles.details}>⭐ IMDb: {data?.imdbRating} | 🎬 {data?.Genre} | 📅 {data?.Released}</Text>
        <Text style={styles.plot} numberOfLines={3}>
          {data?.Plot}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    height: 200,
  },
  imageContainer: {
    width: '40%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  contentContainer: {
    width: '60%',
    justifyContent: 'space-around',
    flex: 1,
    height: '100%',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    color: '#ccc',
    fontSize: 12,
    marginBottom: 5,
  },
  plot: {
    fontSize: 12,
    color: 'white',
  },
});
