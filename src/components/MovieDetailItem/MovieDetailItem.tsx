import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { parseItems } from '../../utils/parseItems';

interface MovieDetailItemProps {
    title: string;
    value: string | undefined;
}

const MovieDetailItem: React.FC<MovieDetailItemProps> = ({ title, value }) => {
    if (!value) { return null; }
    return (
        <View style={styles.crewContainer}>
            <Text style={styles.crewDesignation}>{title}</Text>
            <View style={styles.horizontalCrews}>
                {
                    parseItems(value).map((item, index) => (
                        <View key={index}>
                            <View style={styles.crewImageContainer}>
                                <Image
                                    source={require('../../assets/images/blank-profile-picture.png')} style={styles.crewImage}
                                />
                            </View>
                            <Text style={styles.crewName}>{item}</Text>
                        </View>
                    ))
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 5,
    },
    horizontalCrews: {
        flexDirection: 'row',
        gap: 15,
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
    },
    value: {
        color: 'white',
        fontSize: 16,
    },
    crewImageContainer: {
        width: 90,
        aspectRatio: 3 / 4,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#25252D',
    },
    crewContainer: {
        width: '100%',
        marginBottom: 20,
    },
    crewDesignation: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        marginBottom: 10,
    },
    crewImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    crewName: {
        fontSize: 12,
        color: 'white',
        fontWeight: '500',
        marginTop: 5,
        textAlign: 'center',
    },
});

export default MovieDetailItem;
