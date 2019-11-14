import {createStackNavigator} from 'react-navigation-stack';
import Job from './job';
import Detail from './detail';

export default createStackNavigator(
  {
    Job,
    Detail,
  },
  {
    headerMode: 'none',
  },
);
