import {StyleSheet} from 'react-native';
import {COLORS} from '../../resources/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: '600',
    marginTop: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: COLORS.secondary,
    marginBottom: 10,
  },
  viewInput: {
    borderColor: COLORS.primary,
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
});
