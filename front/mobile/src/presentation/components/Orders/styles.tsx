import {StyleSheet} from 'react-native';
import {COLORS} from '../../resources/constants';
import {screenWidth} from '../../utils/dimensions.hook';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    margin: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  image: {
    width: screenWidth / 4,
    height: screenWidth / 3,
  },
  info: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    margin: 10,
    flex: 1,
  },
  name: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  counter: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.secondary,
  },
});
