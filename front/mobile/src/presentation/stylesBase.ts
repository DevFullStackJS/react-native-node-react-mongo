import {StyleSheet} from 'react-native';
import {COLORS} from './resources/constants';

export default StyleSheet.create({
  space_between: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  contentAlign: {
    alignContent: 'center',
    alignItems: 'center',
  },
  circle: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  textTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: COLORS.secondary,
    margin: 5,
  },
});
