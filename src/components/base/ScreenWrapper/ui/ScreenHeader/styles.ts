import {StyleSheet} from 'react-native';
import {fonts} from '../../../../../theme/fonts';
import themes from 'theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  backButton: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    width: 20,
    height: 20,
    color: themes.dark.BLACK,
  },
  headerTitle: {
    ...fonts.h1Title,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
