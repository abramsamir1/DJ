import {StyleSheet} from 'react-native';
import {fontSizes, themeColors, dimensionsCalculation} from '../../config';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: themeColors.secondary,
  },
  scrollContainer: {
    flexDirection: 'row',
    paddingHorizontal: dimensionsCalculation(16),
    padding: 30,
  },
  item: {
    backgroundColor: themeColors.secondary,
    marginHorizontal: 14,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 140,
    height: 90,
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  name: {
    fontSize: fontSizes.basic,
    fontWeight: 'bold',
    marginTop: 8,
    color: themeColors.primary,
  },
  rating: {
    fontSize: dimensionsCalculation(14),
    color: themeColors.primary,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#000',
    padding: 5,
    margin: 7,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: dimensionsCalculation(16),
    marginTop: dimensionsCalculation(7),
  },
  button: {
    padding: dimensionsCalculation(8),
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleStyle: {
    fontSize: dimensionsCalculation(20),
    fontWeight: 'bold',
    color: themeColors.primary,
    marginTop: dimensionsCalculation(14),
    marginLeft: dimensionsCalculation(14),
  },
});
