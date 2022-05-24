import {StyleSheet} from 'react-native';
import {COLORS} from '../../resources/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {},
  imageBackground: {
    height: 240,
  },
  search: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 50,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    alignContent: 'center',
  },
  contentSearch: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  searchInput: {
    height: 40,
    flex: 1,
    fontSize: 16,
    color: COLORS.white,
  },
  iconsSearch: {
    height: 24,
    width: 24,
    margin: 10,
  },
  blankView: {
    width: 70,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 35,
    fontWeight: 'bold',
    margin: 40,
    marginTop: 25,
    marginBottom: 10,
  },
  readMore: {
    margin: 5,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  readMoreText: {
    fontSize: 10,
    color: COLORS.primary,
    marginLeft: 5,
  },
  arrow: {
    tintColor: COLORS.primary,
  },
});
