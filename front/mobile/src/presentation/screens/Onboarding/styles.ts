import {StyleSheet} from 'react-native';
import {COLORS} from '../../resources/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  viewSkip: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    margin: 15,
  },
  skip: {
    fontSize: 18,
    color: COLORS.primary,
  },
  viewTitle: {
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: '900',
    textAlign: 'center',
    padding: 15,
  },
  viewDescription: {
    backgroundColor: COLORS.secondary,
    opacity: 0.4,
    marginBottom: 20,
    paddingBottom: 10,
  },
  description: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: '900',
    textAlign: 'center',
  },
  footer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  next_prev: {
    fontSize: 16,
    color: COLORS.secondary,
    fontWeight: '600',
  },
});
