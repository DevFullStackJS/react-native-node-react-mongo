import {StyleSheet} from 'react-native';
import {COLORS} from '../../../resources/constants';

import {screenWidth} from '../../../utils/dimensions.hook';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    opacity: 0.8,
  },
  content: {margin: 15},
  image: {width: screenWidth / 4},
  text: {fontSize: 14, fontWeight: 'bold'},
});
