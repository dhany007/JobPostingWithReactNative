import {createStackNavigator} from 'react-navigation-stack';
import Company from './company';
import Detail from './detail';
import AddCompany from './add';

export default createStackNavigator(
  {
    Company,
    Detail,
    AddCompany,
  },
  {
    headerMode: 'none',
  },
);
