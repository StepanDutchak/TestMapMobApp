import {ScreenValue} from '../../../types/navigation';

import {ScreenNavigationEnums} from 'constants/enums/navigation';
import BussIcon from 'assets/icons/BussIcon';
import MapIcon from 'assets/icons/MapIcon';
import InfoIcon from 'assets/icons/InfoIcon';

type BottomTabRouteMap = Record<ScreenValue, string>;
type BottomTabIconMap = Record<
  ScreenValue,
  ({color}: any) => React.JSX.Element
>;

const bottomTabBarRoutesMap: BottomTabRouteMap = {
  [ScreenNavigationEnums.MAP_SCREEN]: '',
  [ScreenNavigationEnums.INFO_SCREEN]: '',
  [ScreenNavigationEnums.ROUTE_SEAT_SCREEN]: '',
};

const bottomTabBarIconMap: BottomTabIconMap = {
  [ScreenNavigationEnums.MAP_SCREEN]: MapIcon,
  [ScreenNavigationEnums.INFO_SCREEN]: InfoIcon,
  [ScreenNavigationEnums.ROUTE_SEAT_SCREEN]: BussIcon,
};

const bottomTabBarActiveIconMap: BottomTabIconMap = {
  [ScreenNavigationEnums.MAP_SCREEN]: MapIcon,
  [ScreenNavigationEnums.INFO_SCREEN]: InfoIcon,
  [ScreenNavigationEnums.ROUTE_SEAT_SCREEN]: BussIcon,
};

export const bottomBarRouteName = (
  screen: ScreenValue,
  routesMap: Partial<BottomTabRouteMap> = bottomTabBarRoutesMap,
) => routesMap[screen] ?? '';

export const bottomBarIcon = (
  screen: ScreenValue,
  routesMap: BottomTabIconMap = bottomTabBarIconMap,
) => routesMap[screen];

export const bottomBarActiveIcon = (
  screen: ScreenValue,
  routesMap: BottomTabIconMap = bottomTabBarActiveIconMap,
) => routesMap[screen];
