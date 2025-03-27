/* eslint-disable react-hooks/exhaustive-deps */
import { Text, StyleSheet, Image, Pressable, Dimensions } from 'react-native';
import React, { useState } from 'react';

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 40) / 2;

interface MovieCardProps {
  navigation: any;
  movie?: any;
  idsList?: any;
  imdbId?: string;
}

export default function MovieCard({ navigation, imdbId, movie }: MovieCardProps) {

  const [movieData, setMovieData] = useState<{
    Poster: string;
    Title: string;
  }>(movie ? movie : []);

  const fetchData = async () => {
    try {
      if(imdbId){
        const res = await fetch(`http://www.omdbapi.com/?apikey=c359d449&i=${imdbId}`);
        const response = await res.json();
        setMovieData(response);
        console.log(response);
      }
    } catch (e) {
      console.log('Error fetching data1:', e);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [imdbId]);

  return (
    <Pressable onPress={() => navigation.navigate('AboutMovie', {imdbId: imdbId ? imdbId : movie.imdbId})} style={[styles.container, { width: cardWidth }]}>
      <Image
        source={{uri: movieData.Poster}}
        style={styles.image}
      />
      <Text style={styles.text}>{movieData.Title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    margin: 5,
  },
  image: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
    textAlign: 'center',
  },
});
