import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import localeImage from '../utils/localeImages';
import colors from '../utils/colors';
import TouchableImage from './TouchableImage';
import {normalize, vh, vw} from '../utils/dimensions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import languages from '../utils/languages';
const {width} = Dimensions.get('screen');
const Header = (defaultProps: any) => {
  const inset = useSafeAreaInsets();
  return (
    <React.Fragment>
      {Platform.OS == 'android' ? (
        <View style={styles.mainHeaderStyle} {...defaultProps}>
          <Text style={styles.appLogoTextStyle}>{languages.appLogo}</Text>
          <View style={styles.IconViewStyle}>
            <TouchableImage
              imageStyle={styles.IconImageStyle}
              source={localeImage.camera}
            />
            <TouchableImage
              imageStyle={styles.IconImageStyle}
              source={localeImage.search}
            />
            <TouchableImage
              imageStyle={styles.IconImageStyle}
              source={localeImage.menu}
            />
          </View>
        </View>
      ) : (
        <View
          style={[
            styles.SafemainHeaderStyle,
            {paddingTop: normalize(inset.top + 10)},
          ]}
          {...defaultProps}>
          <Text style={styles.appLogoTextStyle}>{languages.appLogo}</Text>
          <View style={styles.IconViewStyle}>
            <TouchableImage
              imageStyle={[
                styles.IconImageStyle,
                {height: vw(25), width: vw(25)},
              ]}
              source={localeImage.camera}
            />
            <TouchableImage
              imageStyle={styles.IconImageStyle}
              source={localeImage.search}
            />
            <TouchableImage
              imageStyle={styles.IconImageStyle}
              source={localeImage.menu}
            />
          </View>
        </View>
      )}
    </React.Fragment>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainHeaderStyle: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vh(20),
    paddingHorizontal: vw(10),
    backgroundColor: colors.purple,
    justifyContent: 'space-between',
  },
  SafemainHeaderStyle: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vh(20),
    paddingHorizontal: vw(10),
    justifyContent: 'space-between',
    backgroundColor: colors.purple,
  },
  appLogoTextStyle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  IconViewStyle: {
    width: vw(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  IconImageStyle: {
    height: vw(20),
    width: vw(20),
    resizeMode: 'contain',
    tintColor: colors.white,
  },
});
