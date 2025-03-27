import React from 'react';
import { Dimensions, View, StyleSheet, Image, ImageSourcePropType, Pressable } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { imageData } from '../../constants';

const width = Dimensions.get('window').width - 30;

export default function CarouselComponent({ navigation }: { navigation: any }) {
    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            count: index - progress.value,
            animated: true,
        });
    };

    return (
        <View style={styles.container}>
            <Carousel
                ref={ref}
                width={width}
                height={width / 2}
                data={imageData}
                autoPlay={true}
                onProgressChange={(p) => (progress.value = p)}
                renderItem={({ item, index }: {
                    item: {
                        image: ImageSourcePropType;
                        imdb: string;
                    }; index: number

                }) => (
                    <Pressable onPress={() => navigation.navigate('AboutMovie', { imdbId: item.imdb })} style={styles.carouselContainer} key={index}>
                        <Image source={item.image} style={styles.image} />
                    </Pressable>
                )}
            />

            <Pagination.Basic
                progress={progress}
                data={Array(imageData.length).fill(0)}
                dotStyle={styles.dotStyle}
                containerStyle={styles.containerStyle}
                onPress={onPressPagination}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    carouselContainer: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'red',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    dotStyle: {
        backgroundColor: 'rgba(255,255,255, 0.4)',
        borderRadius: 50,
    },
    containerStyle: { gap: 5, marginTop: 10 },
});
