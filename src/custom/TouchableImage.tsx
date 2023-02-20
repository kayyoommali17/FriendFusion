import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {vw} from '../utils/dimensions';
interface ImageProps {
  source: ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
  touchableStyle?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
const TouchableImage = (props: ImageProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onPress}
      style={[props.touchableStyle]}>
      <Image
        style={props.imageStyle || styles.imagestyle}
        source={props.source}
      />
    </TouchableOpacity>
  );
};

export default TouchableImage;

const styles = StyleSheet.create({
  imagestyle: {
    height: vw(100),
    width: vw(100),
  },
});
