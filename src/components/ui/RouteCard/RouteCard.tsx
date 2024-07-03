import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import FastImage from 'react-native-fast-image';

import BusImg from '../../../assets/images/BusImg.png';
import AnimatedPress from 'components/base/AnimatedPress';
import {ScreenRouteProp} from '@types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationEnums} from 'constants/enums/navigation';
import {IUserRoute} from 'types/store';
import {IAppStateContext} from 'types/context';
import {AppStateProvider} from 'context/AppState';

interface IRouteCard {
  title: string;
  subtitle: string;
  routeData: IUserRoute;
}

const RouteCard = ({title, subtitle, routeData}: IRouteCard) => {
  const navigation = useNavigation<ScreenRouteProp>();

  const {setSelectedRoute}: Partial<IAppStateContext> = AppStateProvider();

  const handleCard = () => {
    setSelectedRoute?.(routeData);
    navigation.navigate(StackNavigationEnums.BOTTOM);
  };

  return (
    <AnimatedPress onPress={handleCard} style={styles.container}>
      <View style={styles.headerCardContainer}>
        <Text style={styles.cardHeaderText}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>

      <View style={styles.imageContainer}>
        <FastImage resizeMode="contain" style={styles.image} source={BusImg} />
      </View>
    </AnimatedPress>
  );
};

export default React.memo(RouteCard);
