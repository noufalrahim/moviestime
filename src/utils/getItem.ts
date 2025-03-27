import AsyncStorage from '@react-native-async-storage/async-storage';

export const getArray = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue ? JSON.parse(jsonValue) : [];
    } catch (error) {
        console.error('Error retrieving array:', error);
        return [];
    }
};
