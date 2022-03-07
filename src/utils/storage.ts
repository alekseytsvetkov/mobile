import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToken = async (token: string) => {
    return await AsyncStorage.setItem('@skeetry_token', token);
};

export const loadToken = async () => {
    return await AsyncStorage.getItem('@skeetry_token');
};

export const removeToken = async () => {
    return await AsyncStorage.removeItem('@skeetry_token');
};
