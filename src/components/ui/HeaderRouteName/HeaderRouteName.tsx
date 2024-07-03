import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface IHeaderRouteName {
  title: string;
  subtitle: string;
}

const HeaderRouteName = ({title, subtitle}: IHeaderRouteName) => {
  return (
    <View style={styles.leftContainer}>
      <Text style={styles.leftContainerTitle}>{title}</Text>
      <Text style={styles.leftContainerSubtitle}>{subtitle}</Text>
    </View>
  );
};

export default React.memo(HeaderRouteName);
