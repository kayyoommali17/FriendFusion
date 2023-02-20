import React, {useRef, useState} from 'react';
import colors from '../../utils/colors';
import languages from '../../utils/languages';
import localeImage from '../../utils/localeImages';
import HeaderNavigation from '../../custom/HeaderNav';
import {normalize, vh, vw} from '../../utils/dimensions';
import TouchableImage from '../../custom/TouchableImage';
import CustomTextInput from '../../custom/CustomTextInput';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Profile = () => {
  const textInputRef1 = useRef<any>(null);
  const textInputRef2 = useRef<any>(null);
  const [nameEdit, setNameEdit] = useState(false);
  const [aboutEdit, setAboutEdit] = useState(false);

  const handleEditNameClick = () => {
    textInputRef1.current.focus();
    setNameEdit(!nameEdit);
  };

  const handleEditAboutClick = () => {
    textInputRef2.current.focus();
    setAboutEdit(!aboutEdit);
  };

  return (
    <View style={styles.mainContainerStyle}>
      <HeaderNavigation screenText={languages.profile} />
      <TouchableImage
        source={localeImage.camera}
        touchableStyle={styles.profileStyle}
        imageStyle={styles.profileImagesStyle}
      />
      <TouchableImage
        source={localeImage.pencil}
        touchableStyle={styles.editstyle}
        imageStyle={styles.editImageStyle}
      />

      <CustomTextInput
        ref={textInputRef1}
        // onFocus={handleFocus}
        editable={nameEdit}
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
        editable={aboutEdit}
        leftIcon={localeImage.info}
        rightIcon={localeImage.pencil}
        rightIconOnPress={handleEditAboutClick}
        TextInputstyle={styles.textInputStyle}
        rightIconStyle={{tintColor: colors.purple}}
        mainViewStyle={styles.textInputViewStyle}
        leftIconStyle={{tintColor: colors.dark_grey}}
      />
      <TouchableOpacity style={styles.phoneViewStyle}>
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
    marginTop: vh(10),
    alignSelf: 'center',
    borderRadius: normalize(100),
    backgroundColor: colors.grey,
  },
  profileImagesStyle: {
    width: vw(200),
    height: vw(200),
    resizeMode: 'contain',
  },
  editstyle: {
    top: vh(270),
    right: vw(110),
    position: 'absolute',
    padding: normalize(10),
    borderRadius: normalize(50),
    backgroundColor: colors.purple,
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
