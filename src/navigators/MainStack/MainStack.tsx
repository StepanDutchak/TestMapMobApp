import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  ScreenNavigationEnums,
  StackNavigationEnums,
} from '../../constants/enums/navigation';
import {MainNavigationOptions} from '../../config/navigation';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import BottomNavigator from 'navigators/BottomNavigator/BottomNavigator';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={MainNavigationOptions}>
      <Stack.Screen
        name={ScreenNavigationEnums.HOME_SCREEN}
        component={HomeScreen}
      />
      <Stack.Screen
        name={StackNavigationEnums.BOTTOM}
        component={BottomNavigator}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
