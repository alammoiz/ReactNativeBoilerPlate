import {AsyncStorage} from 'react-native';

export const reactStorageService = {
  set,
  get,
  clear,
  remove,
};
async function set(key, value) {
  await AsyncStorage.setItem(key, value);
}

async function get(key) {
  return await AsyncStorage.getItem(key);
}

async function clear() {
  return await AsyncStorage.clear();
}

async function remove(key) {
  return await AsyncStorage.removeItem(key);
}
