import {StyleSheet} from 'react-native';
import {screenWidth} from '../../utils/dimensions.hook';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    borderRadius: 20,
  },
  image: {
    width: screenWidth / 2 - 20,
    height: screenWidth / 2 + 50,
  },
  heart: {
    width: 25,
    height: 25,
    margin: 10,
  },
});
