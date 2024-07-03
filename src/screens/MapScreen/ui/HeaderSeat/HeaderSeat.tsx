import React from 'react';
import {Text, View} from 'react-native';
import {IUserRoute} from 'types/store';

import HeaderRouteName from 'components/ui/HeaderRouteName/HeaderRouteName';
import SpeedIcon from 'assets/icons/SpeedIcon';

import {styles} from './styles';

interface IHeaderSeat {
  selectedRoute: IUserRoute;
}
const HeaderSeat = ({selectedRoute}: IHeaderSeat) => {
  return (
    <View style={styles.mainContainer}>
      <HeaderRouteName
        title={selectedRoute.title}
        subtitle={selectedRoute.subtitle}
      />
      <View style={styles.distanceContainer}>
        <SpeedIcon />
        <Text style={styles.textDistance}>{selectedRoute.distance}</Text>
      </View>
    </View>
  );
};

export default React.memo(HeaderSeat);
