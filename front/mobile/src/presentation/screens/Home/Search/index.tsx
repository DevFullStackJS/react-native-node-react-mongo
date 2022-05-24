import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import mapDispatchToProps from '../../../../services/redux/mapDispatchToProps';
import mapStateToProps from '../../../../services/redux/mapStateToProps';

import {CategorieItem} from '../../../components/Home/Search/CategorieItem';
import {ProductItem} from '../../../components/Home/Search/ProductItem';
import {SelectDropdownComponent} from '../../../components/SelectDropdown';
import {Layout} from '../../../layout';

import styles from './styles';

export const Search = connect(
  mapStateToProps,
  mapDispatchToProps,
)(({produit: {list}, categorie: {items}}: any) => {
  const products = Array.isArray(list?.items) ? list.items : [];
  const categories = items || [];

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{products?.length} Apparel</Text>
            <SelectDropdownComponent data={categories} />
          </View>
          <ScrollView
            indicatorStyle="white"
            horizontal
            style={styles.container}>
            {categories.map((item: {id: string; name: string}) => (
              <CategorieItem {...item} key={item.id} />
            ))}
          </ScrollView>
          <View>
            {products.map((item: any) => (
              <ProductItem {...item} key={item.id} />
            ))}
          </View>
        </View>
      </View>
    </Layout>
  );
});
