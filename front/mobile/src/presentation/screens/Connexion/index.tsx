import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {FormButton} from '../../components/btn';
import {TextInputComponent} from '../../components/Input/TextInput';
import {Layout} from '../../layout';

import mapDispatchToProps from '../../../services/redux/mapDispatchToProps';
import mapStateToProps from '../../../services/redux/mapStateToProps';

import stylesBase from '../../stylesBase';
import styles from './styles';
import {useLogin} from './useLogin';

export const Signin = connect(
  mapStateToProps,
  mapDispatchToProps,
)(({signinUtilisateur, inscriptionUtilisateur, navigation}: any) => {
  const {email, setEmail, password, setPassword, loading, message, toSignin} =
    useLogin({signinUtilisateur, inscriptionUtilisateur, navigation});

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={stylesBase.space_between}>
            <Text style={stylesBase.textTitle}>Sign in</Text>
          </View>
          <TextInputComponent
            title={'Email'}
            onChange={setEmail}
            initial={email}
          />
          <TextInputComponent
            title={'Phone'}
            secureTextEntry={true}
            onChange={setPassword}
            initial={password}
          />
          <View>
            <Text style={{fontSize: 16, color: 'red'}}>{message}</Text>
          </View>
          <FormButton
            loading={loading}
            buttonTitle="Sign In"
            onPress={toSignin}
          />
        </View>
      </View>
    </Layout>
  );
});
