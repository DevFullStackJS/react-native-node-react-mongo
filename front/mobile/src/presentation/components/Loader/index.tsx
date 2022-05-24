import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {COLORS} from '../../resources/constants';

import styles from './styles';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={COLORS.primary}
        style={styles.activityIndicator}
      />
    </View>
  );
};
