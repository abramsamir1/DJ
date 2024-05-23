import {Dimensions} from 'react-native';

export const themeColors = {
  primary: '#fff',
  secondary: '#41464C',
  background: '#34373C',
  black: '#000',
};

export const dimensions = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};

export const dimensionsCalculation = (IPhonePixel: number) => {
  return (dimensions.WIDTH * IPhonePixel) / 375;
};

export const fontSizes = {
  large: dimensionsCalculation(15),
  basic: dimensionsCalculation(12),
};
