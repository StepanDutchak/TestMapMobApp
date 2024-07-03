import React, {useCallback} from 'react';

import {text} from '../../locale/en';

// import {} from '@components';

import {} from '@types';

// import {styles} from './styles';
import {ScreenWrapper} from '../../components';
import {styles} from './styles';
import RouteCard from 'components/ui/RouteCard/RouteCard';

import {UserRouteData} from 'fetch/getUserRouteData';
import {IUserRoute} from 'types/store';

interface IHomeScreen {}

const HomeScreen = ({}: IHomeScreen) => {
  const renderCard = useCallback((item: IUserRoute) => {
    return (
      <RouteCard routeData={item} title={item.title} subtitle={item.subtitle} />
    );
  }, []);

  return (
    <ScreenWrapper
      headerStyle={styles.wrapperHeaderStyle}
      isScrollable
      headerTitle={text.homepage_header}>
      {UserRouteData.map(renderCard)}
    </ScreenWrapper>
  );
};

export default HomeScreen;
