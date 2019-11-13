import {createStackNavigator} from 'react-navigation-stack';
import Company from './company';
import Detail from './detail';

export default createStackNavigator({
  Company,
  Detail,
},
{
  headerMode: 'none',
},);
