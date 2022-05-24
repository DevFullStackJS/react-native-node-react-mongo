import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../resources/constants';
import {screenWidth} from '../../../../utils/dimensions.hook';

export default StyleSheet.create({
  container: {
    // flex: 1,
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
    margin: 5,
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
  starView: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  sizeView: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  size: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  sizeText: {
    fontSize: 18,
    color: COLORS.primary,
    textAlign: 'center',
  },
  footer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
});
