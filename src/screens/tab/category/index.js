import {createStackNavigator} from 'react-navigation-stack';
import Category from './category';
import Detail from './detail';

export default createStackNavigator({
  Category,
  Detail,
},
{
  headerMode: 'none',
},);
