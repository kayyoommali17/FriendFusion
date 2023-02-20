import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import localeImage from '../../utils/localeImages';
const {width} = Dimensions.get('window');
const CameraScreen = () => {
  return (
    <View style={styles.mainContainerStyle}>
      <Image
        resizeMode="contain"
        source={localeImage.camera}
        style={{width: width - 200}}
      />
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
