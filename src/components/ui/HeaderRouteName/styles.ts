import {StyleSheet} from 'react-native';
import themes from 'theme/colors';
import {fonts} from 'theme/fonts';

export const styles = StyleSheet.create({
  leftContainerTitle: {
    ...fonts.title18,
  },
  leftContainerSubtitle: {
    ...fonts.title9,
  },
  leftContainer: {
    paddingHorizontal: 12,
    justifyContent: 'center',
    width: '50%',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    height: 47,
    backgroundColor: themes.dark.MAIN_SECOND,
  },
});
