import React from 'react';
import {Text, View} from 'react-native';

import stylesBase from '../../../../stylesBase';

import styles from './styles';

export const Size = ({size}: any) => {
  return (
    <View style={styles.sizeView}>
      {size.map(({_id, value, id}: any) => (
        <View
          style={[stylesBase.circle, stylesBase.contentAlign]}
          key={_id || id}>
          <Text style={styles.sizeText}>{value}</Text>
        </View>
      ))}
    </View>
  );
};
