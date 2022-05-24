import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {icons} from '../../../resources/constants';

import styles from './styles';

export const ProductList = ({products}: any) => {
  const {navigate} = useNavigation<any>();
  return (
    <ScrollView indicatorStyle="white" horizontal style={styles.container}>
      {products.map(({id, image, price, description}: any) => (
        <TouchableOpacity
          key={id}
          style={styles.content}
          onPress={() => navigate('ProductScreen', {id})}>
          <ImageBackground
            source={{uri: image}}
            resizeMode="cover"
            style={styles.image}>
            <Image source={icons.union} style={styles.heart} />
          </ImageBackground>
          <Text numberOfLines={2} style={styles.text}>
            {description}
          </Text>
          <Text style={styles.price}>{price} $</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
