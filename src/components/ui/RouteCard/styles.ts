import {StyleSheet} from 'react-native';
import themes from 'theme/colors';
import {fonts} from 'theme/fonts';

export const styles = StyleSheet.create({
  container: {
    marginTop: 26,
    borderRadius: 20,
    overflow: 'hidden',
    height: 400,
    backgroundColor: themes.dark.WHITE,
  },
  cardHeaderText: {
    ...fonts.h2Title,
  },
  cardSubtitle: {
    ...fonts.title14,
    marginTop: 3,
  },
  headerCardContainer: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 8,
    backgroundColor: themes.dark.ROUTE_CARD_HEADER,
  },
  imageContainer: {},
  image: {
    marginTop: 5,
    marginLeft: 10,
    width: '100%',
    height: '100%',
  },
});
