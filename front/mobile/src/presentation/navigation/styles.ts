import {StyleSheet} from 'react-native';
import {COLORS} from '../resources/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarIcon: {
    width: 25,
    height: 25,
  },
  tabBarCustomButton: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
  },
  customTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
  },
});
