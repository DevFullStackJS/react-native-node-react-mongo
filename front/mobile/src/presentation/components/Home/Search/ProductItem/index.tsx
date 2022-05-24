import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icons} from '../../../../resources/constants';
import {Size} from './size';

import styles from './styles';

export const ProductItem = ({
  image,
  name,
  description,
  price,
  size,
  id,
}: any) => {
  const {navigate} = useNavigation<any>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigate('ProductScreen', {id})}
        style={styles.content}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {description}
          </Text>
          <Text style={styles.price}>${price}</Text>
          <View style={styles.footer}>
            <View>
              <View style={styles.starView}>
                <Image source={icons.star} />
                <Text>4.8 Ratings</Text>
              </View>
              <View style={styles.sizeView}>
                <Text>Size</Text>
                <Size size={size} />
              </View>
            </View>
            <View>
              <Image source={icons.union} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
