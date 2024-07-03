import React from 'react';
import {styles} from './styles';
import {Text, View} from 'react-native';
import AnimatedPress from 'components/base/AnimatedPress';
import {useNavigation} from '@react-navigation/native';
import {ScreenRouteProp} from '@types';

interface IScreenHeader {
  title?: string;
  additionalHeaderIcon?: () => React.ReactNode;
  headerStyle?: object;
  isGoBack?: boolean;
}

const ScreenHeader = ({title, headerStyle, isGoBack}: IScreenHeader) => {
  const navigation = useNavigation<ScreenRouteProp>();

  return (
    <View style={[styles.container, headerStyle]}>
      {isGoBack && (
        <AnimatedPress onPress={navigation.goBack} style={styles.backButton}>
          <Text>{'<'}</Text>
        </AnimatedPress>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default React.memo(ScreenHeader);
