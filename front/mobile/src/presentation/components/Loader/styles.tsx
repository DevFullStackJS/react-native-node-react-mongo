import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../resources/constants';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.secondary,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  activityIndicator: {
    padding: 10,
    flex: 1,
    flexGrow: 1,
  },
});
