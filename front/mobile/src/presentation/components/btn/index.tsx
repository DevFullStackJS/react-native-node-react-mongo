import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator, View} from 'react-native';
import {styles} from './styles';

export const FormButton = ({buttonTitle, style, ...rest}: any) => {
  return (
    <View style={[styles.buttonContainer, style ? style : {}]}>
      {rest.loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <TouchableOpacity {...rest}>
          <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
