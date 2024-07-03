import React, {useCallback, useMemo} from 'react';
import {View} from 'react-native';
import type {BottomTabBarProps as ReactNavigationBottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {bottomBarActiveIcon, bottomBarIcon, bottomBarRouteName} from './utils';

import styles from './styles';
import {ScreenValue} from '../../../types/navigation';
import TabBarItem from './ui/TabBarItem/TabBarItem';

type BottomTabBarProps = ReactNavigationBottomTabBarProps;
const DEFAULT_BOTTOM_PADDING = 10;

const BottomTabBar = ({
  state: {routeNames, index: selectedTab},
  navigation,
}: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();

  const renderTabButton = useCallback(
    (routeName: ScreenValue, selectedIndex: number) => {
      return (
        <TabBarItem
          icon={bottomBarActiveIcon(routeName as ScreenValue)}
          key={routeName}
          isSelected={selectedIndex === selectedTab}
          title={bottomBarRouteName(routeName as ScreenValue)}
          onPress={() => navigation.navigate(routeName)}
        />
      );
    },
    [navigation, selectedTab],
  );

  const renderTabBarList = useMemo(() => {
    return routeNames.map((item, index) => renderTabButton(item, index));
  }, [renderTabButton, routeNames]);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.tabBar,
          {paddingBottom: bottom || DEFAULT_BOTTOM_PADDING},
        ]}>
        {renderTabBarList}
      </View>
    </View>
  );
};

export default BottomTabBar;
