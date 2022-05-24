import React from 'react';
import {Image, ScrollView, View} from 'react-native';

import styles from './styles';

export const CollectionList = ({products}: any) => {
  return (
    <ScrollView indicatorStyle="white" horizontal style={styles.container}>
      {products.map(({_id, image}: any) => (
        <View key={_id} style={styles.content}>
          <Image style={styles.image} source={{uri: image}} />
        </View>
      ))}
    </ScrollView>
  );
};
