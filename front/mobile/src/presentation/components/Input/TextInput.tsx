import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './styles';

export const TextInputComponent = ({
  title,
  placeholder = '',
  onChange = () => {},
  initial,
  ...props
}: any) => {
  const [value, setValue] = useState(initial);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={(text: string) => {
            setValue(text);
            onChange(text);
          }}
          value={value}
          {...props}
        />
      </View>
    </View>
  );
};
