import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";

import Login from './components/login/login';
import MainMenu from './components/mainMenu/mainMenu';
import Scan from './components/scanner/scan';
import Gen from './components/codeGenerator/generator';
import Cart from './components/cartPage/shoppingCart';
import About from './components/about/about';

export const DrawerNavi = DrawerNavigator({
  Menu: { screen: MainMenu,},
  Cart: { screen: Cart,
          navigationOptions: {
            drawer: {
                label: 'Shopping Car',
                icon: ({ tintColor }) => <Icon name="rocket" size={24} />},},},
            },);

export const StackNavi = StackNavigator({
  Home: { screen: Login },
  Menu: { screen: MainMenu,},
  Scanner: { screen: Scan },
  Gen: { screen: Gen },
  Cart: { screen: Cart },
  About: { screen: About },
});

