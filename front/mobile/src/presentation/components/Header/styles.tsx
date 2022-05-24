import {StyleSheet} from 'react-native';
import {COLORS} from '../../resources/constants';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  logo: {height: 32, width: 48, tintColor: COLORS.secondary},
  title: {
    textTransform: 'uppercase',
    fontSize: 22,
    fontWeight: 'bold',
  },
  rigth: {flexDirection: 'row', justifyContent: 'flex-end'},
});
