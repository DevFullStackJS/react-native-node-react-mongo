import React, {ReactNode} from 'react';
import {TouchableWithoutFeedback, Keyboard, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

type Props = {
  children: ReactNode | ReactNode[];
  testID?: string;
};

export const Layout = ({children}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        {/* <Header_left title={'langues.home?.title'} onLefClick={() => {}} not_show={false} /> */}
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="always"
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          extraHeight={60}
          style={styles.container}
          contentContainerStyle={styles.contentContainerStyle}>
          {children}
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export const LayoutComponent = ({children}: Props) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};
