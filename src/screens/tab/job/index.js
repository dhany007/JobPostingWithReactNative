import {createStackNavigator} from 'react-navigation-stack';
import Job from './job';
import Detail from './detail';
import AddJob from './add';
import EditJob from './edit';

export default createStackNavigator(
  {
    Job,
    Detail,
    AddJob,
    EditJob,
  },
  {
    headerMode: 'none',
  },
);
