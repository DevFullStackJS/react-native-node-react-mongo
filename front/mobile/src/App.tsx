import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import {Onboarding} from './presentation/screens/Onboarding';
import Tabs from './presentation/navigation';
import {Loader} from './presentation/components/Loader';
import {Signin} from './presentation/screens';

import mapDispatchToProps from './services/redux/mapDispatchToProps';
import mapStateToProps from './services/redux/mapStateToProps';

const Stack = createStackNavigator();

const App = (props: any) => {
  const [refreshing, setRefreshing] = useState(true);
  const {getAllGuide, getAllCategorie, utilisateur} = props;
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    getAllCategorie({}, () => {}, '?page=1&rowPerPage=100');
    getAllGuide({}, () => setRefreshing(false), '?page=1&rowPerPage=10');
  };

  if (refreshing) {
    return <Loader />;
  }

  if (props?.initial?.screen) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Onboarding'}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  if (utilisateur?.accessToken && utilisateur?.utilisateur?._id) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            header: () => <View />,
          }}
          initialRouteName={'HomeScreen'}>
          <Stack.Screen
            options={{header: () => <View />}}
            name="HomeScreen"
            component={Tabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Signin'}>
        <Stack.Screen name="Signin" component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
