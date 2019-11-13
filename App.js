import React, {Component} from 'react';

import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import Starter from './src/screens/starter';
import PreLoginRegister from './src/screens/preLoginRegister';

import MenuTabs from './src/screens/tab';

import Register from './src/screens/register';
import Login from './src/screens/login';

const AppNavigator = createStackNavigator(
  {
    Starter: {screen: Starter},
    PreLoginRegister: {screen: PreLoginRegister},
    MenuTabs: {screen: MenuTabs},
    Login: {screen: Login},
    Register: {screen: Register},
  },
  {
    initialRouteName: 'MenuTabs',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
