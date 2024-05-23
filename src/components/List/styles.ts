import {StyleSheet} from 'react-native';
import {fontSizes, themeColors, dimensionsCalculation} from '../../config';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: themeColors.secondary,
  },
  item: {
    backgroundColor: themeColors.background,
    margin: 7,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    resizeMode: 'contain',
  },
  name: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    marginTop: 8,
    color: themeColors.primary,
  },
  location: {
    fontSize: fontSizes.basic,
    marginTop: 4,
    color: themeColors.primary,
  },
  rating: {
    fontSize: dimensionsCalculation(14),
    color: themeColors.primary,
    padding: 7,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: '#000',
  },
  ratingView: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#000',
    marginVertical: 7,
    alignSelf: 'flex-start',
  },
  upperView: {
    flexDirection: 'row',
  },
  infoUpperView: {
    marginLeft: dimensionsCalculation(14),
  },
  genreStyle: {
    padding: dimensionsCalculation(8),
    borderWidth: 1.5,
    borderColor: 'gray',
    borderRadius: 10,
    marginRight: dimensionsCalculation(7),
    marginTop: dimensionsCalculation(14),
    backgroundColor: themeColors.background,
  },
  genreTextStyle: {
    color: 'gray',
    fontSize: fontSizes.basic,
  },
  viewInfo: {
    flexDirection: 'row',
    padding: dimensionsCalculation(14),
  },
  titleStyle: {
    flex: 1,
    fontSize: dimensionsCalculation(20),
    fontWeight: 'bold',
    color: themeColors.primary,
  },
  viewIcons: {
    flexDirection: 'row',
  },
  viewIcon: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    backgroundColor: themeColors.background,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 7,
  },
});
