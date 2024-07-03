import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {IUserRoute} from 'types/store';
import themes from 'theme/colors';

interface IHeaderSeat {
  selectedRoute: IUserRoute;
}
const HeaderSeat = ({selectedRoute}: IHeaderSeat) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.leftContainerTitle}>{selectedRoute.title}</Text>
        <Text style={styles.leftContainerSubtitle}>
          {selectedRoute.subtitle}
        </Text>
      </View>
      <View>
        <View style={[styles.boxContent]}>
          <Text>Reserved</Text>
          <View
            style={[
              styles.Box,
              {backgroundColor: themes.dark.NOT_AVAILABLE_BOX},
            ]}
          />
        </View>
        <View style={styles.boxContent}>
          <Text>Available</Text>
          <View style={styles.Box} />
        </View>
      </View>
    </View>
  );
};

export default React.memo(HeaderSeat);
