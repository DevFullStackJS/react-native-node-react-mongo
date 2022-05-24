import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Animated,
  Falsy,
  RecursiveArray,
  RegisteredStyle,
  ViewStyle,
} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import Svg, {Path} from 'react-native-svg';

import {Home, Compte, Favorites, Orders, Search, Product} from '../screens';

import {COLORS, icons} from '../resources/constants';
import {createStackNavigator} from '@react-navigation/stack';
import styles from './styles';
import {Header} from '../components/Header';

const Tab = createBottomTabNavigator();

export type CompteStackParams = {
  CompteScreen: undefined;
};

const CompteStack = createStackNavigator<CompteStackParams>();

const CompteStackScreen = () => {
  return (
    <CompteStack.Navigator>
      <CompteStack.Screen
        name="CompteScreen"
        component={Compte}
        options={{header: () => <View />}}
      />
    </CompteStack.Navigator>
  );
};

export type OrdersStackParams = {
  OrdersScreen: undefined;
};

const OrdersStack = createStackNavigator<OrdersStackParams>();

const OrdersStackScreen = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen
        name="OrdersScreen"
        component={Orders}
        options={{header: () => <View />}}
      />
    </OrdersStack.Navigator>
  );
};

export type FavoritesStackParams = {
  FavoritesScreen: undefined;
};

const FavoritesStack = createStackNavigator<FavoritesStackParams>();

const FavoritesStackScreen = () => {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        name="FavoritesScreen"
        component={Favorites}
        options={{header: () => <View />}}
      />
    </FavoritesStack.Navigator>
  );
};

export type HomeStackParams = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  ProductScreen: {id: string} | undefined;
};

const HomeStack = createStackNavigator<HomeStackParams>();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{header: () => <View />}}
      />
      <HomeStack.Screen
        name="ProductScreen"
        component={Product}
        options={{header: () => <View />}}
      />
      <HomeStack.Screen
        name="SearchScreen"
        component={Search}
        options={{header: () => <View />}}
      />
    </HomeStack.Navigator>
  );
};

const TabBarCustomButton = ({accessibilityState, children, onPress}: any) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', position: 'absolute', top: 0}}>
          <View style={{flex: 1, backgroundColor: COLORS.white}} />
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={{flex: 1, backgroundColor: COLORS.white}} />
        </View>

        <TouchableOpacity style={styles.tabBarCustomButton} onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 60,
          backgroundColor: COLORS.white,
        }}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

const CustomTabBar = (props: {
  props: JSX.IntrinsicAttributes &
    BottomTabBarProps & {
      style?:
        | false
        | RegisteredStyle<ViewStyle>
        | Animated.Value
        | Animated.AnimatedInterpolation
        | Animated.WithAnimatedObject<ViewStyle>
        | Animated.WithAnimatedArray<
            | Falsy
            | ViewStyle
            | RegisteredStyle<ViewStyle>
            | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>>
            | readonly (Falsy | ViewStyle | RegisteredStyle<ViewStyle>)[]
          >
        | null
        | undefined;
    };
}) => {
  return (
    <View>
      <View style={styles.customTabBar} />
      <BottomTabBar {...props.props} />
    </View>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar props={props} />}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          header: () => <Header />,
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                ...styles.tabBarIcon,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: (props: any) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackScreen}
        options={{
          header: () => <Header />,
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.favoris}
              resizeMode="contain"
              style={{
                ...styles.tabBarIcon,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: (props: any) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersStackScreen}
        options={{
          header: () => <Header />,
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.orders}
              resizeMode="contain"
              style={{
                ...styles.tabBarIcon,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: (props: any) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Compte"
        component={CompteStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.compte}
              resizeMode="contain"
              style={{
                ...styles.tabBarIcon,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: (props: any) => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
