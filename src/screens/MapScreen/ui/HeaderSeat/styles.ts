import {StyleSheet} from 'react-native';

import {fonts} from 'theme/fonts';

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    marginBottom: 18,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDistance: {
    marginHorizontal: 12,
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
