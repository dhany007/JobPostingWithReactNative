import {createStackNavigator} from 'react-navigation-stack';
import Category from './category';

export default createStackNavigator(
  {
    Category,
  },
  {
    headerMode: 'none',
  },
);
