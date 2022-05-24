import {StyleSheet} from 'react-native';

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
  image: {width: screenWidth / 2, height: screenWidth / 2},
});
