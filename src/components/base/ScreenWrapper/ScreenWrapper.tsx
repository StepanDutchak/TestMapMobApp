import React from 'react';
import {ScrollView, View, SafeAreaView} from 'react-native';

import ScreenHeader from './ui/ScreenHeader/ScreenHeader';

import {styles} from './styles';

const disabledP = {paddingHorizontal: 0};

interface ScreenWrapperProp {
  children: React.ReactNode;
  isScrollable?: boolean;
  contentStyle?: object;
  headerTitle?: string;
  additionalHeaderIcon?: () => React.ReactNode;
  isHeader?: boolean;
  containerStyle?: object;
  headerStyle?: object;
  disableHPadding?: boolean;
  isGoBack?: boolean;
}

const ScreenWrapper = ({
  children,
  isScrollable,
  contentStyle,
  containerStyle,
  headerTitle,
  additionalHeaderIcon,
  isHeader = true,
  headerStyle,
  disableHPadding,
  isGoBack,
}: ScreenWrapperProp) => {
  const Container = isScrollable ? ScrollView : View;

  return (
    <SafeAreaView style={[styles.container]}>
      <Container
        contentContainerStyle={[styles.contentContainer, containerStyle]}
        style={[styles.content, contentStyle, disableHPadding && disabledP]}
        showsVerticalScrollIndicator={false}>
        {isHeader && (
          <ScreenHeader
            isGoBack={isGoBack}
            headerStyle={headerStyle}
            additionalHeaderIcon={additionalHeaderIcon}
            title={headerTitle}
          />
        )}
        <View>{children}</View>
      </Container>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
