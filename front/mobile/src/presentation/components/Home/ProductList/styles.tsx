import {StyleSheet} from 'react-native';
import {COLORS} from '../../../resources/constants';

import {screenWidth} from '../../../utils/dimensions.hook';

export default StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    opacity: 0.8,
  },
  content: {margin: 5},
  image: {width: screenWidth / 4, height: screenWidth / 3},
  text: {
    width: screenWidth / 4,
    textAlign: 'center',
    margin: 4,
    fontSize: 10,
  },
  price: {textAlign: 'center', color: COLORS.primary},
  union: {
    position: 'absolute',
    bottom: 45,
    right: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
  heart: {
    width: 25,
    height: 25,
    margin: 10,
  },
});
