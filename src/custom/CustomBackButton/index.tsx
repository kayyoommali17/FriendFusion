import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import {normalize, vw} from '../../utils/dimensions';
import localeImage from '../../utils/localeImages';
interface Props {
  onPress?: any;
  imagestyle?: StyleProp<ImageStyle>;
  mainStyle?: StyleProp<ViewStyle>;
}
const BackButton = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      hitSlop={{top: 0, right: 0, left: 0, bottom: 0}}
      style={[styles.touchStyle, props.mainStyle]}
      onPress={props.onPress}>
      <Image
        source={localeImage.back}
        style={[styles.imageStyle, props.imagestyle]}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
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
