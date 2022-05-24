import {StyleSheet} from 'react-native';

import {COLORS} from '../../../resources/constants';
import styles from '../../../stylesBase';
import {screenWidth} from '../../../utils/dimensions.hook';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    margin: 10,
  },
  productView: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  product: {
    width: screenWidth - 100,
    height: screenWidth,
    borderRadius: 20,
  },
  titleView: {
    margin: 10,
    ...styles.space_between,
    flex: 1,
  },
  add: {
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    ...styles.space_between,
    padding: 10,
  },
  imageAdd: {
    marginRight: 20,
  },
  title: {
    textAlign: 'left',
    textTransform: 'uppercase',
    fontSize: 20,
    color: COLORS.secondary,
  },
  price: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.primary,
    margin: 5,
  },
  discription: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.secondary,
  },
});
