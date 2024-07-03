import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {ScreenNavigationEnums} from 'constants/enums/navigation';

import TabBar from 'components/ui/TabBar/TabBar';
import SeatScreen from 'screens/SeatScreen/SeatScreen';
import MapScreen from 'screens/MapScreen/MapScreen';

const Tab = createBottomTabNavigator();
const renderCustomBottomBar = (props: BottomTabBarProps) => {
  return <TabBar {...props} />;
};
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => renderCustomBottomBar(props)}
      screenOptions={{
        headerShown: false,
        lazy: false,
      }}>
      <Tab.Screen
        name={ScreenNavigationEnums.ROUTE_SEAT_SCREEN}
        component={SeatScreen}
      />
      <Tab.Screen
        name={ScreenNavigationEnums.MAP_SCREEN}
        component={MapScreen}
      />
      <Tab.Screen
        name={ScreenNavigationEnums.INFO_SCREEN}
        component={SeatScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
