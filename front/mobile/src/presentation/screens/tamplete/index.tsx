import React from 'react';
import {View, Text} from 'react-native';
import {Layout} from '../../layout';
import styles from './styles';

export const Tamplete = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <View>
          <Text>tamplete</Text>
        </View>
      </View>
    </Layout>
  );
};
