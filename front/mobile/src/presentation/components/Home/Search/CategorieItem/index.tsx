import React from 'react';
import {Image, Text, View} from 'react-native';
import {icons} from '../../../../resources/constants';

import styles from './styles';

export const CategorieItem = ({name}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Image source={icons.close} style={styles.image} />
      </View>
    </View>
  );
};
