import { View, StyleSheet, TextInput, ScrollView, Text } from 'react-native';
import React, { useCallback, useState } from 'react';
import { HorizontalSlider } from '../../components/HorizontalSlider';
import CarouselComponent from '../../components/Carousel/CarouselComponent';
import { getArray } from '../../utils/getItem';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
import { featured } from '../../constants';

export default function HomeScreen({ navigation }: { navigation: any }) {

  const [favs, setFavs] = useState<string[]>([]);

  useFocusEffect(
    useCallback(() => {
      getArray('favourites').then((data) => {
        if (data) { setFavs(data); }
      });
    }, [])
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>🎬 Movies Time</Text>
      <View style={styles.inputContainer}>
        <Icon name="search" size={24} color="#575B66" />
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor="#575B66"
          onPress={() => navigation.navigate('Search')}
        />
      </View>
      <CarouselComponent navigation={navigation} />
      <View style={styles.sliderContainer}>
        {
          favs && favs.length > 0 && <HorizontalSlider navigation={navigation} idsList={favs} label={'Favourites'} showMoreBtnVisible={true} />

        }
        <HorizontalSlider navigation={navigation} idsList={featured} label={'Featured'} showMoreBtnVisible={false} />
      </View>
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
  sliderContainer: {
    paddingBottom: 30,
  },
  heading: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#131316',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 10,
    padding: 5,
  },
  textInput: {
    width: '90%',
    color: 'white',
  },
  searchIcon: {
    width: '10%',
    textAlign: 'center',
    color: 'white',
  },
});
