import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
// @ts-ignore
import stripe from 'tipsi-stripe';

import mapDispatchToProps from '../../../services/redux/mapDispatchToProps';
import mapStateToProps from '../../../services/redux/mapStateToProps';

import {Loader} from '../../components/Loader';
import {OrdersItem} from '../../components/Orders';

import {icons} from '../../resources/constants';
import styles from './styles';

import config from '../../../data/config';

stripe.setOptions({
  publishableKey: config.clientSecret,
  merchantId: config.merchantId, // Optional
  // androidPayMode: 'production', // Android only production / test
  androidPayMode: 'test', // Android only production / test
});

export const Orders = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  ({
    updateDetail,
    getAllDetail,
    utilisateur: {utilisateur},
    detail: {items},
  }: any) => {
    const [refreshing, setRefreshing] = useState(true);

    useEffect(() => {
      initIap();
    }, []);

    const initIap = async () => {
      const available = await stripe.canMakeNativePayPayments({
        networks: ['american_express', 'discover', 'visa', 'cartes_bancaires'],
      });
      console.log({available});
      getData();
    };

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

    if (refreshing) {
      return <Loader />;
    }
    const products = Array.isArray(items)
      ? items.map(({produit, nb, id}) => ({...produit, id, nb}))
      : [];
    const total = products.reduce(
      (acc, curr: any) => acc + Number(curr.price) * Number(curr.nb),
      0,
    );

    const pay = async () => {
      const items = products.map(({name, price}: any) => ({
        label: name,
        amount: Number(price).toFixed(2)?.toString(),
      }));
      const shippingMethods = [
        {
          id: 'fedex',
          label: 'FedEX',
          detail: 'Test @ 10',
          amount: `${total}.00`,
        },
      ];

      const options = {
        requiredBillingAddressFields: ['all'],
        requiredShippingAddressFields: ['phone', 'postal_address'],
        shippingMethods,
      };
      let token;
      try {
        if (Platform.OS === 'ios') {
          token = await stripe.paymentRequestWithApplePay(
            [...items, {label: 'App', amount: total.toFixed(2)}],
            options,
          );
        } else {
          const options = {
            total_price: `${total}.00`,
            currency_code: 'USD',
            shipping_address_required: false,
            billing_address_required: true,
            shipping_countries: ['US', 'CA'],
            line_items: [
              {
                currency_code: 'USD',
                description: 'Whisky',
                total_price: '50.00',
                unit_price: '50.00',
                quantity: '1',
              },
              {
                currency_code: 'USD',
                description: 'Vine',
                total_price: '30.00',
                unit_price: '30.00',
                quantity: '1',
              },
            ],
          };

          token = await stripe.paymentRequestWithAndroidPay(options);
        }

        console.log(token);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.titleView}>
            <Text style={styles.title}>Checkout</Text>
            <Image source={icons.checkout} />
          </View>
          <View>
            {products.map((item: any) => (
              <OrdersItem
                key={item.id || item._id}
                {...item}
                onUpdate={(nb: string) => {
                  updateDetail(
                    {nb: nb.toString()},
                    (res: any) => res && getData(),
                    item.id || item._id,
                  );
                }}
              />
            ))}
          </View>
          <View style={styles.blankView} />
        </ScrollView>
        <View style={styles.flotView}>
          <View style={styles.total}>
            <Text style={styles.priceText}>Total</Text>
            <Text style={styles.price}>$ {total}</Text>
          </View>
          <TouchableOpacity onPress={pay}>
            <View style={styles.flotBtn}>
              <Image source={icons.shopping} />
              <Text style={styles.checkout}>Checkout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);
