import React, {Component} from 'react';

// import { StackNavigator, DrawerNavigator } from "react-navigation";
import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import {createDrawerNavigator} from 'react-navigation-drawer';

import Home from './src/screens/home';
import SideBar from './src/screens/sidebar';

import Job from './src/screens/job';
import Company from './src/screens/job';
import Category from './src/screens/job';

import Starter from './src/screens/starter';
import PreLoginRegister from './src/screens/preLoginRegister';

import Register from './src/screens/register';
import Login from './src/screens/login';

const Drawer = createDrawerNavigator(
  {
    Home: {screen: Home},
    Job: {screen: Job},
    Company: {screen: Company},
    Category: {screen: Category},
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    contentComponent: props => <SideBar {...props} />,
  },
);

const AppNavigator = createStackNavigator(
  {
    Starter: {screen: Starter},
    PreLoginRegister: {screen: PreLoginRegister},
    Drawer: {screen: Drawer},

    Login: {screen: Login},
    Register: {screen: Register},
  },
  {
    initialRouteName: 'PreLoginRegister',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

