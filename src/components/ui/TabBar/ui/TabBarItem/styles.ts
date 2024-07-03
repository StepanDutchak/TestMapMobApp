import {StyleSheet} from 'react-native';
import themes from 'theme/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginTop: 5,
    alignItems: 'center',
  },
  containerAction: {
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderSeparator: {
    position: 'absolute',
    top: -15,
    width: 60,
    height: 2,
    backgroundColor: themes.dark.white,
  },
  centerBtnText: {
    fontWeight: 500,
    lineHeight: 12,
    fontSize: 10,
    marginTop: 4,
    textAlign: 'center',
  },
});
export default styles;
