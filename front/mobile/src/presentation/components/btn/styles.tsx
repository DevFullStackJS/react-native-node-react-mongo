import {StyleSheet} from 'react-native';
import {COLORS} from '../../resources/constants';
import {screenHeight} from '../../utils/dimensions.hook';

export const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: screenHeight / 15,
    backgroundColor: COLORS.primary,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
