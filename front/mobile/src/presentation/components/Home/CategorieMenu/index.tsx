import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import styles from './styles';

export const CategorieMenu = ({categories}: any) => {
  return (
    <ScrollView horizontal style={styles.container}>
      {categories.map(({id, name}: any) => (
        <View key={id} style={styles.content}>
          <Text style={styles.text}>{name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
