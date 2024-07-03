import React from 'react';
import {Pressable, Text} from 'react-native';

import styles from './styles';

import {View} from 'react-native';
import themes from 'theme/colors';

type TabBarItemProps = {
  title: string;
  onPress: () => void;
  icon: ({color}: any) => React.JSX.Element;
  isSelected: boolean;
};

const TabBarItem = ({
  title,
  icon: Icon,
  onPress,
  isSelected,
}: TabBarItemProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {isSelected && <View style={styles.borderSeparator} />}
      <Icon />
      <Text style={[styles.centerBtnText]}>{title}</Text>
    </Pressable>
  );
};

export default TabBarItem;
