import React from 'react';
import colors from '../../utils/colors';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {normalize, vh, vw} from '../../utils/dimensions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import localeImage from '../../utils/localeImages';
import {useNavigation} from '@react-navigation/native';

interface Props {
  onPress?: any;
  screenText: string;
  backgroundColor?: string;
}
const HeaderNavigation = (props: Props) => {
  const insets = useSafeAreaInsets();
  // const navigation = useNavigation<any>();
  return (
    <View
      style={[
        styles.mainViewStyle,
        {
          paddingTop: normalize(insets.top + 5),
          backgroundColor: props?.backgroundColor || colors.purple,
        },
      ]}>
      {/* <BackButton onPress={props.onPress} />
       */}
      <TouchableOpacity
        activeOpacity={0.7}
        hitSlop={{top: 0, right: 0, left: 0, bottom: 0}}
        style={[styles.touchStyle]}
        // onPress={() => navigation.goBack()}
      >
        <Image source={localeImage.back} style={[styles.imageStyle]} />
      </TouchableOpacity>
      <Text style={styles.screenTextStyle}>
        {props?.screenText || 'screenName'}
      </Text>
    </View>
  );
};

export default HeaderNavigation;

const styles = StyleSheet.create({
  mainViewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: vh(10),
    paddingHorizontal: vw(20),
  },
  screenTextStyle: {
    fontWeight: '500',
    marginLeft: vw(20),
    color: colors.white,
    fontSize: normalize(18),
  },
  touchStyle: {
    width: vw(30),
    height: vw(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(15),
  },
  imageStyle: {
    height: vw(25),
    width: vw(25),
    tintColor: colors.white,
  },
});
