import {StyleSheet} from 'react-native';
import themes from 'theme/colors';

export const styles = StyleSheet.create({
  headerStyle: {
    marginLeft: 12,
  },
  boxSeatContainer: {
    marginHorizontal: 7,
    marginTop: 19,
    height: 47,
    width: 47,
    backgroundColor: themes.dark.AVAILABLE_BOX,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reservedBoxSeatContainer: {
    backgroundColor: themes.dark.NOT_AVAILABLE_BOX,
  },
  mainContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flatListLeftContainer: {
    alignItems: 'center',
  },
  flatListRightContainer: {
    alignItems: 'center',
  },
});
