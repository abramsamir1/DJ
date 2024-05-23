import {StyleSheet} from 'react-native';
import {dimensionsCalculation, fontSizes, themeColors} from '../../config';

export const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: themeColors.background,
    paddingVertical: 10,
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
  },

  iconStyle: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    backgroundColor: themeColors.background,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  navText: {
    color: '#FFF',
    marginTop: 5,
    fontSize: dimensionsCalculation(10),
  },
});
