import React from 'react';

import {text} from '../../locale/en';

// import {} from '@components';

import {} from '@types';

import {AnimatedPress, ScreenWrapper} from '../../components';
import {FlatList, Text, View} from 'react-native';
import {IAppStateContext} from 'types/context';
import {AppStateProvider} from 'context/AppState';
import HeaderSeat from './ui/HeaderSeat/HeaderSeat';
import {styles} from './styles';
import {ISideSeat} from 'types/store';

interface ISeatScreen {}

const SeatScreen = ({}: ISeatScreen) => {
  const {selectedRoute}: Partial<IAppStateContext> = AppStateProvider();

  const renderBoxSeat = ({item}: {item: ISideSeat}) => {
    return (
      <AnimatedPress
        style={[
          styles.boxSeatContainer,
          !item.isAvailable && styles.reservedBoxSeatContainer,
        ]}>
        <Text>{item.seatNumber}</Text>
      </AnimatedPress>
    );
  };

  return (
    <ScreenWrapper
      disableHPadding
      isScrollable
      isGoBack
      headerStyle={styles.headerStyle}
      headerTitle={text.seat_availability_header}>
      <HeaderSeat selectedRoute={selectedRoute} />
      <View style={styles.mainContainer}>
        <FlatList
          scrollEnabled={false}
          data={selectedRoute?.seat?.leftSide}
          renderItem={renderBoxSeat}
          keyExtractor={item => item.seatNumber.toString()}
          numColumns={2}
          contentContainerStyle={styles.flatListLeftContainer}
        />
        <FlatList
          scrollEnabled={false}
          data={selectedRoute?.seat?.rightSide}
          renderItem={renderBoxSeat}
          keyExtractor={item => item.seatNumber.toString()}
          numColumns={2}
          contentContainerStyle={styles.flatListRightContainer}
        />
      </View>
    </ScreenWrapper>
  );
};

export default SeatScreen;
