import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {icons} from '../../resources/constants';

import styles from './styles';

export const FavoritesItem = ({image, ...all}: any) => {
  console.log({all});

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: image}}
        resizeMode="cover"
        style={styles.image}>
        <Image source={icons.heart} style={styles.heart} />
      </ImageBackground>
    </View>
  );
};
