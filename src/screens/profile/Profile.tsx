import colors from '../../utils/colors';
import languages from '../../utils/languages';
import React, {useRef} from 'react';
import localeImage from '../../utils/localeImages';
import HeaderNavigation from '../../custom/HeaderNav';
import {normalize, vh, vw} from '../../utils/dimensions';
import TouchableImage from '../../custom/TouchableImage';
import ImagePicker from 'react-native-image-crop-picker';
import CustomTextInput from '../../custom/CustomTextInput';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const Profile = () => {
  const textInputRef1 = useRef<any>(null);
  const textInputRef2 = useRef<any>(null);
  const [image, setImage] = React.useState<any>(null);

  console.log('image', image);

  const handleEditNameClick = () => {
    textInputRef1.current.focus();
  };

  const handleEditAboutClick = () => {
    textInputRef2.current.focus();
  };

  const _onPressImagePick = () => {
    ImagePicker.openPicker({
      width: vw(200),
      height: vw(200),
      cropping: true,
    }).then(image => {
      setImage(image.path);
      // props.onChange?.(image);
    });
  };

  return (
    <View style={styles.mainContainerStyle}>
      <HeaderNavigation screenText={languages.profile} />
      {image === null ? (
        <TouchableImage
          onPress={_onPressImagePick}
          source={localeImage.camera}
          touchableStyle={styles.profileStyle}
          imageStyle={styles.profileImagesStyle}
        />
      ) : (
        <TouchableImage
          onPress={_onPressImagePick}
          source={{uri: image}}
          touchableStyle={[
            styles.profileStyle,
            {borderColor: colors.darkGreen},
          ]}
          imageStyle={styles.profileImagesStyle}
        />
      )}
      <CustomTextInput
        ref={textInputRef1}
        placeholder="Full Name"
        rightIcon={localeImage.pencil}
        leftIcon={localeImage.userProfile}
        TextInputstyle={styles.textInputStyle}
        rightIconOnPress={handleEditNameClick}
        mainViewStyle={styles.textInputViewStyle}
        rightIconStyle={{tintColor: colors.purple}}
        leftIconStyle={{tintColor: colors.dark_grey}}
      />
      <CustomTextInput
        placeholder="About"
        ref={textInputRef2}
        leftIcon={localeImage.info}
        rightIcon={localeImage.pencil}
        TextInputstyle={styles.textInputStyle}
        rightIconOnPress={handleEditAboutClick}
        mainViewStyle={styles.textInputViewStyle}
        rightIconStyle={{tintColor: colors.purple}}
        leftIconStyle={{tintColor: colors.dark_grey}}
      />
      <TouchableOpacity activeOpacity={0.7} style={styles.phoneViewStyle}>
        <Image source={localeImage.call} style={styles.phoneImageStyle} />
        <View style={styles.phoneIconstyle}>
          <Text style={styles.phoneTextStyle}>{'Phone'}</Text>
          <Text style={styles.phoneTextStyle}>{'+91 9876543210'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  profileStyle: {
    borderWidth: 2,
    marginTop: vh(10),
    alignSelf: 'center',
    borderColor: colors.black,
    borderRadius: normalize(100),
    backgroundColor: colors.grey,
  },
  profileImagesStyle: {
    width: vw(200),
    height: vw(200),
    resizeMode: 'cover',
    borderRadius: vw(100),
  },
  editImageStyle: {
    height: vw(20),
    width: vw(20),
    tintColor: colors.white,
  },
  phoneImageStyle: {
    height: vw(26),
    width: vw(26),
    alignSelf: 'center',
    tintColor: colors.dark_grey,
  },
  textInputViewStyle: {
    borderWidth: 0,
    marginTop: vh(30),
    // borderBottomWidth: 1,
    marginHorizontal: vw(30),
  },
  textInputStyle: {
    borderBottomWidth: 1,
    marginHorizontal: 15,
  },
  phoneViewStyle: {
    paddingBottom: 10,
    flexDirection: 'row',
    marginHorizontal: vw(30),
    borderBottomColor: 'grey',
    marginTop: vh(30),
  },

  phoneTextStyle: {
    fontSize: normalize(18),
    marginTop: vh(7),
  },
  phoneIconstyle: {
    marginLeft: normalize(18),
  },
});
