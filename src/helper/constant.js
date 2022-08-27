import {Dimensions, Platform} from 'react-native';

const constant = {
  /** App Color */
  appWhiteColor: '#FFFFFF',
  appGreenColor: '#18CA75',
  appBlackColor: '#242424',

  /** iphone and android condition */
  isIphoneX: Platform.OS === 'ios' && Dimensions.get('window').height === 812,
  isIOS: Platform.OS === 'ios',
  isiPAD:
    Dimensions.get('window').height / Dimensions.get('window').width < 1.6,
  isIpad:
    Dimensions.get('window').width > 400 &&
    Dimensions.get('window').height / Dimensions.get('window').width < 1.6,
  isANDROID: Platform.OS === 'android',

  /** screen */
  screen: Dimensions.get('window'),
  screenHeight:
    (Platform.OS === 'ios' && Dimensions.get('window').height) ||
    Dimensions.get('window').height - 24,
  screenWidth: Dimensions.get('window').width,
  fullScreenHeight: Dimensions.get('window').height,
  buttonWidth: Dimensions.get('window').width - 36,

  /** Fonts */
  roboto_bold: 'Roboto_Bold',
  roboto_light: 'Roboto_Light',
  roboto_thin: 'Roboto_Thin',
};
export default constant;
