import { View, Text, StyleSheet, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import MovieCard from '../Cards/MovieCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface HorizontalSliderProps {
  navigation: any;
  idsList: string[];
  label: string;
  showMoreBtnVisible: boolean;
}

export default function HorizontalSlider({ navigation, idsList, label, showMoreBtnVisible }: HorizontalSliderProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Favourites')} style={styles.headerContainer}>
        <Text style={styles.heading}>{label}</Text>
        <Icon name="chevron-right" size={24} color="white" />
      </Pressable>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      >
        {idsList.slice(0, 5).map((id, index) => (
          <MovieCard key={index} navigation={navigation} imdbId={id} />
        ))}

        {showMoreBtnVisible && idsList.length > 5 && (
          <TouchableOpacity
            style={styles.showMoreButton}
            onPress={() => navigation.navigate('Favourites')}
          >
            <Text style={styles.showMoreText}>Show More</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingVertical: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  showMoreButton: {
    backgroundColor: '#444',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  showMoreText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
