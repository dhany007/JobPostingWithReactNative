import {createStackNavigator} from 'react-navigation-stack';
import Category from './category';
import AddCategory from './add';
import EditCategory from './edit';

export default createStackNavigator(
  {
    Category,
    AddCategory,
    EditCategory
  },
  {
    headerMode: 'none',
  },
);
