import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens/Home';
import {CarDetails} from '../screens/CarDetails';
import {Scheduling} from '../screens/Scheduling';
import {SchedulingDetails} from '../screens/SchedulingDetails';
import {SchedulingComplete} from '../screens/SchedulingComplete';

import {RootStackParamList} from '../utils/RootStackParams';

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{headerShown: false}} />
      <Screen
        name="CarDetails"
        component={CarDetails}
        options={{headerShown: false}}
      />
      <Screen
        name="Scheduling"
        component={Scheduling}
        options={{headerShown: false}}
      />
      <Screen
        name="SchedulingDetails"
        component={SchedulingDetails}
        options={{headerShown: false}}
      />
      <Screen
        name="SchedulingComplete"
        component={SchedulingComplete}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}
