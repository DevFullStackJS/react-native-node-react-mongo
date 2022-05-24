import {StyleSheet} from 'react-native';
import {COLORS} from '../../resources/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {},
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 38,
    color: COLORS.secondary,
    margin: 5,
  },
  checkout: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 25,
    color: COLORS.secondary,
    margin: 10,
  },
  flotView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  flotBtn: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  blankView: {
    height: 80,
    width: 60,
  },
  price: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceText: {
    color: COLORS.secondary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
