import {StyleSheet} from 'react-native';
import {fontSizes, themeColors, dimensionsCalculation} from '../../config';

export const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: themeColors.secondary,
    flexDirection: 'row',
  },
  viewStory: {
    flex: 1,
    padding: dimensionsCalculation(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameStyle: {
    fontSize: fontSizes.basic,
    color: themeColors.primary,
    marginTop: 7,
  },
  imgStyle: {
    width: dimensionsCalculation(70),
    height: dimensionsCalculation(70),
    borderRadius: dimensionsCalculation(70),
    borderColor: 'gray',
    borderWidth: 3,
    resizeMode: 'contain',
  },
});
