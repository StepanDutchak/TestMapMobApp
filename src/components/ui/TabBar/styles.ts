import {StyleSheet} from 'react-native';
import themes from 'theme/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 36,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: themes.dark.white,
    bottom: 0,
  },
  borderSeparator: {
    position: 'absolute',
    top: 0,
    width: 40,
    height: 1,
    backgroundColor: themes.dark.white,
  },
  tabBar: {
    width: '100%',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default styles;
