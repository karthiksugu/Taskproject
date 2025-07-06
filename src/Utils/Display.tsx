import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const setHeight = (h: number): number => (height / 100) * h;
const setWidth = (w: number): number => (width / 100) * w;

export default { setHeight, setWidth };