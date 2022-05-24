import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {connect} from 'react-redux';

import {ProductList} from '../../../components/Home/ProductList';
import {Size} from '../../../components/Home/Search/ProductItem/size';
import {Loader} from '../../../components/Loader';
import {Counter} from '../../../components/Orders';
import {Layout} from '../../../layout';

import mapDispatchToProps from '../../../../services/redux/mapDispatchToProps';
import mapStateToProps from '../../../../services/redux/mapStateToProps';

import {icons} from '../../../resources/constants';
import stylesBase from '../../../stylesBase';
import styles from './styles';

export const Product = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  ({
    produit: {list},
    updateDetail,
    addDetail,
    utilisateur: {utilisateur},
    getAllDetail,
    detail: {items},
  }: any) => {
    const [refreshing, setRefreshing] = useState(true);
    const products = Array.isArray(list?.items) ? list.items : [];
    const {params} = useRoute<any>();
    useEffect(() => {
      init();
    }, []);

    const getData = () => {
      getAllDetail(
        {},
        (res: any) => {
          console.log(res);
          setRefreshing(false);
        },
        '?page=1&rowPerPage=100&utilisateur=' + utilisateur?._id,
      );
    };

    const init = () => {
      getData();
    };

    const details = Array.isArray(items)
      ? items.map(({produit, nb, id}) => ({...produit, id, nb}))
      : [];

    const item = products.find(({id}: any) => id === params?.id);
    const isInCart = details.find(({_id}: any) => _id === item?.id);

    console.log({details, isInCart, item});

    const addToCart = () => {
      addDetail(
        {
          utilisateur: utilisateur._id,
          produit: item?.id,
          nb: '1',
          status: '1',
        },
        (res: any) => console.log({res}),
      );
    };

    if (refreshing) {
      return <Loader />;
    }

    return (
      <Layout>
        <View style={styles.container}>
          {item && (
            <View style={styles.content}>
              <View style={styles.productView}>
                <Image source={{uri: item.image}} style={styles.product} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.title}>{item.name}</Text>
                {isInCart ? (
                  <Counter
                    nb={isInCart.nb}
                    onUpdate={(nb: string) => {
                      updateDetail(
                        {nb: nb.toString()},
                        (res: any) => res && getData(),
                        isInCart.id || isInCart._id,
                      );
                    }}
                  />
                ) : (
                  <TouchableOpacity style={styles.add} onPress={addToCart}>
                    <Image source={icons.add} style={styles.imageAdd} />
                    <Image source={icons.union} />
                  </TouchableOpacity>
                )}
                <View>
                  <Image source={icons.export} />
                </View>
              </View>
              <View>
                <Text style={styles.discription}>{item.description}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
              <View style={stylesBase.space_between}>
                <View style={stylesBase.space_between}>
                  <Text>Color</Text>
                  <View style={stylesBase.space_between}>
                    {item.color?.map(({_id, value}: any) => (
                      <View
                        key={_id}
                        style={[stylesBase.circle, {backgroundColor: value}]}
                      />
                    ))}
                  </View>
                </View>
                <View style={stylesBase.space_between}>
                  <Text>Size</Text>
                  <Size size={item.size} />
                </View>
              </View>
              <View>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.discription}>{item.info}</Text>
              </View>
            </View>
          )}
          <View>
            <Text style={stylesBase.textTitle}>Just for you</Text>
          </View>
          <ProductList products={products} />
        </View>
      </Layout>
    );
  },
);
