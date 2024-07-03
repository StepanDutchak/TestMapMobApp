import React from 'react';

import {text} from '../../locale/en';

// import {} from '@components';

import {} from '@types';

// import {styles} from './styles';
import {ScreenWrapper} from '../../components';
// import {styles} from './styles';

import {View} from 'react-native';
import MapView from 'react-native-maps';
import {styles} from './styles';
import HeaderSeat from './ui/HeaderSeat/HeaderSeat';
import {IAppStateContext} from 'types/context';
import {AppStateProvider} from 'context/AppState';

interface IMapScreen {}

const MapScreen = ({}: IMapScreen) => {
  const {selectedRoute}: Partial<IAppStateContext> = AppStateProvider();

  return (
    <ScreenWrapper
      disableHPadding
      isScrollable={false}
      headerStyle={styles.headerStyle}
      headerTitle={text.map_header}>
      <HeaderSeat selectedRoute={selectedRoute} />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </ScreenWrapper>
  );
};

export default MapScreen;
