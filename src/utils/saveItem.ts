import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveArray = async (key: string, value: string[]) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
        console.error('Error saving array:', error);
    }
};
