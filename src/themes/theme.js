import {Platform, StyleSheet, Dimensions} from 'react-native';

export const _width = Dimensions.get('window').width;
export const _height = Dimensions.get('window').height;

export const theme = {
  // Color
  colorPrimaryDark: '#3A9CBB',
  colorPrimary: '#42bae7',
  colorDark: '#333333',
  colorNormal: '#545454',
  colorLight: '#999999',
  colorVeryLight: '#bfbfbf',
  colorWhite: '#fff',
  colorOutline: '#dddddd',
  colorLightBlue: '#54C1E9',
  colorUnderLay: '#eeeeee',
  colorLightGray: '#c7c7c7',

  colorSuccess: '#5cb85c',
  colorDanger: '#FF2734',
  colorWarning: '#f0ad4e',

  // Font
  fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
  fontSizeBase: 14,

  get fontSizeBigTitle() {
    //16
    return this.fontSizeBase * 1.428571428571429;
  },
  get fontSizeTitle() {
    //16
    return this.fontSizeBase * 1.142857142857143;
  },
  get fontSizeNormal() {
    //14
    return this.fontSizeBase;
  },
  get fontSizeSmall() {
    //12
    return this.fontSizeBase * 0.8571428571428571;
  },
  get fontSizeTiny() {
    //10
    return this.fontSizeBase * 0.7142857142857143;
  },

  // Badge
  badgeBg: '#ED1727',
  badgeTextColor: '#fff',
};

export const themeStyle = StyleSheet.create({
  // Container should be included in every component render()'s first view
  // e.g.  return ( <View style={[themeStyle.container],{flexDirection:'column' | 'row'}> ...rest of the code... </View>)
  layoutContainer: {
    width: _width,
    height: _height,
    backgroundColor: theme.colorWhite,
  },
  rowContainerCenter: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  columnContainer: {
    flexDirection: 'column',
    padding: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd',
  },
  buttonLayout: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.colorOutline,
    padding: 10,
    justifyContent: 'center',
  },

  //Text styles
  categorizeTextTitle: {
    color: theme.colorLightBlue,
    fontSize: theme.fontSizeBigTitle,
  },
  categorizeTextDescription: {
    color: theme.colorDark,
    fontSize: theme.fontSizeNormal,
  },
  textTitle: {
    color: theme.colorNormal,
    fontSize: theme.fontSizeTitle,
  },
  textTitlePrimary: {
    color: theme.colorPrimary,
    fontSize: theme.fontSizeTitle,
  },
  //text with normal size (14) and normal color
  textNormal: {
    color: theme.colorNormal,
    fontSize: theme.fontSizeNormal,
  },
  textNormalBold: {
    color: theme.colorNormal,
    fontSize: theme.fontSizeNormal,
    fontWeight: 'bold',
  },
  //text with normal size (14) and blue color
  textNormalPrimary: {
    color: theme.colorPrimary,
    fontSize: theme.fontSizeNormal,
  },
  textSmall: {
    color: theme.colorNormal,
    fontSize: theme.fontSizeSmall,
  },
  textSmall_light: {
    color: theme.colorLight,
    fontSize: theme.fontSizeSmall,
  },
  textSmallDark: {
    color: theme.colorDark,
    fontSize: theme.fontSizeSmall,
  },
  textNormalDark: {
    color: theme.colorDark,
    fontSize: theme.fontSizeNormal,
  },
  textSmallLightGray: {
    color: theme.colorLightGray,
    fontSize: theme.fontSizeSmall,
  },
  //text with normal size (12) and blue color
  textSmallPrimary: {
    color: theme.colorPrimary,
    fontSize: theme.fontSizeSmall,
  },
  textTiny: {
    color: theme.colorNormal,
    fontSize: theme.fontSizeTiny,
  },
  textTinyPrimary: {
    color: theme.colorPrimary,
    fontSize: theme.fontSizeTiny,
  },

  //Button styles
  btnNormal: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden',
    borderRadius: 2,
    backgroundColor:
      Platform.OS === 'ios' ? theme.colorWhite : theme.colorPrimaryDark,
  },

  //Modal styles
  modalContainer: {
    backgroundColor: '#FEFDE0',
    borderColor: '#E9ECED',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalTitle: {
    color: theme.colorLightBlue,
    fontSize: theme.fontSizeBigTitle,
    alignSelf: 'flex-start',
    padding: 10,
  },
  modalDescription: {
    color: theme.colorDark,
    fontSize: theme.fontSizeNormal,
    alignSelf: 'flex-start',
    padding: 10,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,.8)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  separatorDark: {
    height: 1,
    backgroundColor: '#CCC',
  },
});
