import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../resources/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  content: {
    padding: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 30,
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {},
  name: {
    fontSize: 12,
    color: COLORS.secondary,
    margin: 5,
  },
});
