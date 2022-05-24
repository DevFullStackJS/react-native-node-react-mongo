import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, ImageBackground, Image, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CategorieMenu} from '../../components/Home/CategorieMenu';
import {CollectionList} from '../../components/Home/CollectionList';
import {ProductList} from '../../components/Home/ProductList';
import {Loader} from '../../components/Loader';
import {Layout} from '../../layout';

import {COLORS, icons, images} from '../../resources/constants';
import styles from './styles';
import stylesBase from '../../stylesBase';

import mapStateToProps from '../../../services/redux/mapStateToProps';
import mapDispatchToProps from '../../../services/redux/mapDispatchToProps';

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  ({
    getAllProduit,
    produit: {list},
    getAllCollection,
    collection,
    categorie: {items},
  }: any) => {
    const {navigate} = useNavigation<any>();
    const [refreshing, setRefreshing] = useState(true);

    useEffect(() => {
      init();
    }, []);

    const init = () => {
      getAllProduit &&
        getAllProduit(
          {},
          () => {
            getAllCollection(
              {},
              () => setRefreshing(false),
              '?page=1&rowPerPage=100',
            );
          },
          '?page=1&rowPerPage=100',
        );
    };

    if (refreshing) {
      return <Loader />;
    }

    const products = Array.isArray(list?.items) ? list.items : [];

    const categories = items || [];
    const collections = Array.isArray(collection?.list?.items)
      ? collection?.list?.items[0].produit
      : [];

    return (
      <Layout>
        <View style={styles.container}>
          <View style={styles.content}>
            <ImageBackground
              source={images.home}
              resizeMode="cover"
              style={styles.imageBackground}>
              <View style={styles.content}>
                <Text style={styles.title} numberOfLines={4}>
                  {`Luxury 
  Fashion
    & Accessories`}
                </Text>
                <View style={styles.contentSearch}>
                  <View style={styles.blankView} />
                  <View style={styles.search}>
                    <Image source={icons.search} style={styles.iconsSearch} />
                    <TextInput
                      style={styles.searchInput}
                      placeholder={'Explore Collection'}
                      placeholderTextColor={COLORS.white}
                      onPressIn={() => navigate('SearchScreen')}
                    />
                  </View>
                  <View style={styles.blankView} />
                </View>
              </View>
            </ImageBackground>
            <View>
              <Text style={stylesBase.textTitle}>New Arrival</Text>
            </View>
            <CategorieMenu categories={categories} />
            <View style={styles.readMore}>
              <Text style={styles.readMoreText}>Explore More</Text>
              <Image source={icons.arrow} style={styles.arrow} />
            </View>
            <ProductList products={products} />
            <View>
              <Text style={stylesBase.textTitle}>Collections</Text>
            </View>
            <CollectionList products={collections} />
            <View>
              <Text style={stylesBase.textTitle}>Just for you</Text>
            </View>
            <ProductList products={products} />
          </View>
        </View>
      </Layout>
    );
  },
);
