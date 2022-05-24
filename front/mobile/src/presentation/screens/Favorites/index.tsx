import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import mapDispatchToProps from '../../../services/redux/mapDispatchToProps';
import mapStateToProps from '../../../services/redux/mapStateToProps';
import {FavoritesItem} from '../../components/Favorites';
import {Loader} from '../../components/Loader';

import stylesBase from '../../stylesBase';
import styles from './styles';

export const Favorites = connect(
  mapStateToProps,
  mapDispatchToProps,
)(({getAllFavoris, favoris: {list}}: any) => {
  const [refreshing, setRefreshing] = useState(true);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    setRefreshing(false);
    getAllFavoris(
      {},
      () => {
        setRefreshing(false);
      },
      '?page=1&rowPerPage=100',
    );
  };

  if (refreshing) {
    return <Loader />;
  }

  const products = list?.items || [];
  return (
    <View style={styles.container}>
      <View>
        <Text style={stylesBase.textTitle}>Favorites</Text>
      </View>
      <FlatList
        columnWrapperStyle={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
        numColumns={2}
        renderItem={({item}) => <FavoritesItem {...item?.produit} />}
        data={products}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
});
