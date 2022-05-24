import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import {FormButton} from '../../components/btn';
import {TextInputComponent} from '../../components/Input/TextInput';
import {Layout} from '../../layout';

import mapDispatchToProps from '../../../services/redux/mapDispatchToProps';
import mapStateToProps from '../../../services/redux/mapStateToProps';
import {takePhotosApi} from '../../../services/technique/takePhoto';

import {icons, images} from '../../resources/constants';
import stylesBase from '../../stylesBase';
import styles from './styles';

export const Compte = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  ({
    initialScreenUsers,
    signoutUtilisateur,
    utilisateur: {utilisateur},
  }: any) => {
    const [telephone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [adresse, setAddress] = useState('');

    useEffect(() => {
      console.log({utilisateur});
      setAddress(utilisateur.adresse);
      setEmail(utilisateur.email);
      setPhone(utilisateur.telephone);
      setName(utilisateur.nom);
      setName(utilisateur.prenom);
    }, []);

    return (
      <Layout>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={stylesBase.space_between}>
              <TouchableOpacity onPress={() => initialScreenUsers(true)}>
                <Image source={icons.help} style={styles.help} />
              </TouchableOpacity>
              <Text style={stylesBase.textTitle}>Profile</Text>
              <TouchableOpacity onPress={() => signoutUtilisateur()}>
                <Image source={icons.logout} style={styles.logout} />
              </TouchableOpacity>
            </View>
            <View style={styles.info}>
              <Image source={images.product} style={styles.pdf} />
              <TouchableOpacity
                onPress={async () => {
                  const photo = await takePhotosApi(false);
                  if (
                    photo &&
                    typeof photo === 'string' &&
                    photo.split('https://').length > 0
                  ) {
                    // updatePdp(photo);
                  }
                }}
                style={{top: -30, marginLeft: 95}}>
                <Image source={icons.stylet} style={{width: 24, height: 24}} />
              </TouchableOpacity>
              <Text style={[stylesBase.textTitle, {marginTop: -10}]}>
                {`${utilisateur.prenom} ${utilisateur.nom}`}
              </Text>
            </View>
            <TextInputComponent
              title={'Name'}
              onChange={setName}
              initial={name}
            />
            <TextInputComponent
              title={'Email'}
              onChange={setEmail}
              initial={email}
              editable={false}
            />
            <TextInputComponent
              title={'Phone'}
              keyboardType="numeric"
              onChange={setPhone}
              initial={telephone}
            />
            <TextInputComponent
              title={'Adress'}
              onChange={setAddress}
              initial={adresse}
            />
            <FormButton buttonTitle="SAVE CHANGE" />
          </View>
        </View>
      </Layout>
    );
  },
);
