import {StyleSheet} from 'react-native';
import themes from 'theme/colors';
import {fonts} from 'theme/fonts';

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,

    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  boxContent: {
    marginTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Box: {
    width: 23,
    height: 23,
    marginLeft: 10,
    marginRight: 20,
    borderRadius: 5,
    backgroundColor: themes.dark.AVAILABLE_BOX,
  },
  //   AVAILABLE_BOX: '#FFFFFF',
  //   NOT_AVAILABLE_BOX: '##ABCBFF',
  leftContainerTitle: {
    ...fonts.title18,
  },
  leftContainerSubtitle: {
    ...fonts.title9,
  },
});
