import React from 'react';
import {View, SafeAreaView, Image, Text} from 'react-native';
import {icons} from '../../resources/constants';

import styles from './styles';

export const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Image source={icons.menu} />
        </View>
        <View style={styles.headerTitle}>
          <Image source={icons.logo} style={styles.logo} />
          <Text style={styles.title}>Instaglam</Text>
        </View>
        <View style={styles.rigth}>
          <Image source={icons.search} />
          <Image source={icons.shopping} />
        </View>
      </View>
    </SafeAreaView>
  );
};
