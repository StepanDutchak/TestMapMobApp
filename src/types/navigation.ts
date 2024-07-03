import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ScreenNavigationEnums} from '../constants/enums/navigation';

export type ScreenRouteProp = {
  navigate: (SCREEN: string, items?: object) => void;
  goBack: () => void;
};

export type RootStackParamList = {
  [ScreenNavigationEnums.MAP_SCREEN]: undefined;
  [ScreenNavigationEnums.HOME_SCREEN]: undefined;
  [ScreenNavigationEnums.INFO_SCREEN]: undefined;
  [ScreenNavigationEnums.ROUTE_SEAT_SCREEN]: undefined;
};

export type RouteScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNavigationEnums.ROUTE_SEAT_SCREEN
>;

export const BottomScreen = {
  [ScreenNavigationEnums.MAP_SCREEN]: 'MAP_SCREEN',
  [ScreenNavigationEnums.ROUTE_SEAT_SCREEN]: 'ROUTE_SEAT_SCREEN',
  [ScreenNavigationEnums.INFO_SCREEN]: 'INFO_SCREEN',
};

export type ScreenValue = (typeof BottomScreen)[keyof typeof BottomScreen];
