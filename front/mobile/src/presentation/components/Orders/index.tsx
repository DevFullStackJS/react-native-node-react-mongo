import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icons} from '../../resources/constants';
import stylesBase from '../../stylesBase';

import styles from './styles';

export const Counter = ({onUpdate, nb}: any) => {
  return (
    <View style={styles.counter}>
      <View style={stylesBase.circle}>
        <TouchableOpacity onPress={() => onUpdate(Number(nb) - 1)}>
          <Image source={icons.negative} />
        </TouchableOpacity>
      </View>
      <Text style={styles.count}>{nb}</Text>
      <View style={stylesBase.circle}>
        <TouchableOpacity onPress={() => onUpdate(Number(nb) + 1)}>
          <Image source={icons.plus} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const OrdersItem = ({
  image,
  name,
  description,
  price,
  nb,
  onUpdate,
}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {description + description}
          </Text>
          <Counter onUpdate={onUpdate} nb={nb} />
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
    </View>
  );
};
