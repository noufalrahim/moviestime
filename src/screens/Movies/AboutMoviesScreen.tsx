/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet, Text, ScrollView, Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { parseItems } from '../../utils/parseItems';
import { MovieType } from '../../types/MovieType';
import Icon from 'react-native-vector-icons/Ionicons';
import { getArray } from '../../utils/getItem';
import { saveArray } from '../../utils/saveItem';
import { MovieDetailItem } from '../../components/MovieDetailItem';

interface AboutMoviesScreenProps {
    navigation: any;
    route: any;
}

export default function AboutMoviesScreen({ route }: AboutMoviesScreenProps) {
    const { imdbId } = route.params;
    console.log(imdbId);
    const [favs, setFavs] = useState<string[]>();
    const [data, setData] = useState<MovieType>();
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch(`http://www.omdbapi.com/?apikey=c359d449&i=${imdbId}`);
            const response = await res.json();
            setData(response);
            console.log(response);
        } catch (e) {
            console.log('Error fetching data:', e);
        } finally {
            setLoading(false);
        }

        getArray('favourites').then((favData) => {
            if (favData) {
                setFavs(favData);
            }
        });
    };

    React.useEffect(() => {
        fetchData();
    }, [imdbId]);

    const handleRemoveFromFavs = async () => {
        if (favs) {
            const updatedFavs = favs.filter(id => id !== imdbId);
            setFavs(updatedFavs);
            await saveArray('favourites', updatedFavs);
        }
        fetchData();
    };

    const handleAddToFavs = async () => {
        favs?.push(imdbId);
        if (favs) {
            await saveArray('favourites', favs);
        }
        fetchData();
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#f5c71f" />
            </View>
        );
    }

    if (!data) {
        return (
            <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No Data Found!</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: data?.Poster }} style={styles.image} />
            </View>
            <View style={styles.badgesContainer}>
                {parseItems(data.Genre).map((item, index) => (
                    <View style={styles.badgeContainer} key={index}>
                        <Text style={styles.badgeText}>{item}</Text>
                    </View>
                ))}
            </View>
            <ScrollView
                style={styles.badgesContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {data.Ratings.map((item, index) => (
                    <View style={[styles.badgeContainer, { backgroundColor: '#f5c71f', marginHorizontal: 5 }]} key={index}>
                        <Text style={[styles.badgeText, { color: 'black' }]}>{item.Source} {item.Value}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.aboutContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>{data.Title}</Text>
                    {favs?.includes(data.imdbID) ? (
                        <Icon onPress={handleRemoveFromFavs} name="heart" size={30} color="red" />
                    ) : (
                        <Icon onPress={handleAddToFavs} name="heart-outline" size={30} color="white" />
                    )}
                </View>
                <View style={styles.badgesContainer}>
                    {parseItems(data.Language).map((item, index) => (
                        <View style={styles.badgeContainer} key={index}>
                            <Text style={styles.badgeText}>{item}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.badgesContainer}>
                    {parseItems(data.Country).map((item, index) => (
                        <View style={styles.badgeContainer} key={index}>
                            <Text style={styles.badgeText}>{item}</Text>
                        </View>
                    ))}
                </View>
                <Text style={styles.description}>{data.Plot}</Text>
                <View style={[styles.badgeContainer, { backgroundColor: '#f5c71f', marginVertical: 10 }]}>
                    <Text style={[styles.badgeText, { color: 'black' }]}>{data.Awards}</Text>
                </View>
                <View style={{marginVertical: 10}}>
                    <MovieDetailItem title="Directos" value={data.Director} />
                    <MovieDetailItem title="Writers" value={data.Writer} />
                    <MovieDetailItem title="Actors" value={data.Actors} />
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#1F1F29',
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 4,
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    badgeContainer: {
        backgroundColor: '#312F35',
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 10,
    },
    noDataContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#1F1F29',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F1F29',
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    noDataText: {
        fontSize: 16,
        color: 'white',
    },
    badgesContainer: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 15,
    },
    badgeText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 14,
    },
    aboutContainer: {
        flexDirection: 'column',
        paddingVertical: 20,
    },
    title: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 8,
        width: '90%',
    },
    description: {
        fontSize: 16,
        color: '#BBBBBB',
        lineHeight: 22,
        marginBottom: 20,
    },
});

