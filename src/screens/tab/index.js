import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import JobScreen from './job';
import CategoryScreen from './category';
import CompanyScreen from './company';
import ProfilScreen from './profile';

export default createBottomTabNavigator({
  JOB: {
    screen: JobScreen,
    navigationOptions: {
      title: 'Job',
      tabBarIcon: ({tintColor}) => (
        <Icon name="briefcase" color={tintColor} size={25} />
      ),
    },
  },
  COMPANY: {
    screen: CompanyScreen,
    navigationOptions: {
      title: 'Company',
      tabBarIcon: ({tintColor}) => (
        <Icon name="building" color={tintColor} size={25} />
      ),
    },
  },
  CATEGORY: {
    screen: CategoryScreen,
    navigationOptions: {
      title: 'Category',
      tabBarIcon: ({tintColor}) => (
        <Icon name="list-alt" color={tintColor} size={25} />
      ),
    },
  },
  PROFILE: {
    screen: ProfilScreen,
    navigationOptions: {
      title: 'Profile',
      tabBarIcon: ({tintColor}) => (
        <Icon name="user" color={tintColor} size={25} />
      ),
    },
  },
});
