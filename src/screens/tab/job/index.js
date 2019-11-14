import {createStackNavigator} from 'react-navigation-stack';
import Job from './job';
import Detail from './detail';
import AddJob from './add';

export default createStackNavigator(
  {
    Job,
    Detail,
    AddJob,
  },
  {
    headerMode: 'none',
  },
);
