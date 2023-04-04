import colors from '../utils/colors';
import React, {useState} from 'react';
import languages from '../utils/languages';
import localeImage from '../utils/localeImages';
import CustomButton from '../custom/CustomButton';
import HeaderNavigation from '../custom/HeaderNav';
import {vh, normalize, vw} from '../utils/dimensions';
import {firebase} from '@react-native-firebase/auth';
import TouchableImage from '../custom/TouchableImage';
import database from '@react-native-firebase/database';
import CustomTextInput from '../custom/CustomTextInput';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  validateName,
  validateEmail,
  validatePassword,
  validatePhoneNumber,
  validateConfirmPassword,
} from '../utils/commonFunction';

interface State {
  name: string;
  email: string;
  password: string;
  nameError: string;
  phoneError: string;
  emailError: string;
  phoneNumber: string;
  confirmPass: string;
  passwordError: string;
  confirmPassError: string;
}

const initialState: State = {
  name: '',
  email: '',
  password: '',
  nameError: '',
  phoneError: '',
  emailError: '',
  phoneNumber: '',
  confirmPass: '',
  passwordError: '',
  confirmPassError: '',
};
const SignUp = () => {
  const [toggle, setToggle] = useState(false);
  const [state, setState] = useState(initialState);

  /**
   * @handleToggle Function
   * @description toggle eye to see password
   */
  const handleToggle = () => {
    setToggle(!toggle);
  };

  /**
   * @_validateName Function
   * @description validating name using regex
   */
  const handleNameChange = (name: string) => {
    const nameError = validateName(name);
    setState({...state, name, nameError});
  };

  /**
   * @handleEmailChange Function
   * @description validating email using regex
   */
  const handleEmailChange = (email: string) => {
    const emailError = validateEmail(email);
    setState({...state, email, emailError});
  };

  /**
   * @_onChangePasswordText Function
   * @description  validating phone using regex
   */
  const handlePhoneChange = (phoneNumber: string) => {
    const phoneError = validatePhoneNumber(phoneNumber);
    setState({...state, phoneNumber, phoneError});
  };

  /**
   * @_onChangePasswordText Function
   * @description  validating password using regex
   */
  const handlePasswordChange = (password: string) => {
    const passwordError = validatePassword(password);
    setState({...state, password, passwordError});
  };

  /**
   * @_onChangePasswordText Function
   * @description  validating confirmPassword
   */
  const handleConfirmPassChange = (confirmPass: string) => {
    const confirmPassError = validateConfirmPassword(
      state.password,
      confirmPass,
    );
    setState({...state, confirmPass, confirmPassError});
  };

  /**
   * @_onChangePasswordText Function
   * @description  checking input field is filled or not
   */
  const _onPressSignUp = () => {
    if (!state.name) {
      Alert.alert('Name is required');
    } else if (!state.email) {
      Alert.alert('Email is required');
    } else if (!state.password) {
      Alert.alert('password is required');
    } else if (state.password !== state.confirmPass) {
      Alert.alert('password not matched');
    } else {
      ProfileSetUp();
    }
  };

  /**
   * @SignUpRequest Function
   * @description  signUp user to firebase
   */
  const ProfileSetUp = async () => {
    try {
      let profileImg = '';
      let uid = firebase.auth()?.currentUser?.uid;
      await database()
        .ref('/users/' + uid)
        .set({
          uid: uid,
          name: state.name,
          email: state.email,
          profileImg: profileImg,
        })
        .then(res => {
          // Alert.alert('Register Succesfully');
          console.log('response at signup', res);
          console.log('Data set succesfully');
        });
    } catch (error) {
      return error;
    }
  };

  return (
    <View style={styles.mainContainerStyle}>
      <HeaderNavigation screenText={languages.signUp} />
      <KeyboardAwareScrollView
        extraHeight={30}
        showsVerticalScrollIndicator={false}>
        <>
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
            value={state.name}
            placeholder="Full Name"
            onChangeText={handleNameChange}
            leftIcon={localeImage.userProfile}
            mainViewStyle={styles.textInputViewStyle}
            rightIconStyle={{tintColor: colors.purple}}
            leftIconStyle={{tintColor: colors.dark_grey}}
          />
          <Text style={{color: colors.red, marginLeft: vw(30)}}>
            {state.nameError ? state.nameError : ''}
          </Text>
          <CustomTextInput
            maxLength={10}
            placeholder="Phone"
            value={state.phoneNumber}
            leftIcon={localeImage.call}
            onChangeText={handlePhoneChange}
            mainViewStyle={styles.textInputViewStyle}
            rightIconStyle={{tintColor: colors.purple}}
            leftIconStyle={{tintColor: colors.dark_grey}}
          />

          <Text style={{color: colors.red, marginLeft: vw(30)}}>
            {state.phoneError ? state.phoneError : ''}
          </Text>

          <CustomTextInput
            value={state.email}
            placeholder="Email"
            leftIcon={localeImage.email}
            onChangeText={handleEmailChange}
            mainViewStyle={styles.textInputViewStyle}
            rightIconStyle={{tintColor: colors.purple}}
            leftIconStyle={{tintColor: colors.dark_grey}}
          />
          <Text style={{color: colors.red, marginLeft: vw(30)}}>
            {state.emailError ? state.emailError : ''}
          </Text>
          <CustomTextInput
            value={state.password}
            placeholder="Password"
            secureTextEntry={toggle}
            leftIcon={localeImage.lock}
            rightIconOnPress={handleToggle}
            onChangeText={handlePasswordChange}
            mainViewStyle={styles.textInputViewStyle}
            leftIconStyle={{tintColor: colors.dark_grey}}
            rightIconStyle={{tintColor: colors.dark_grey}}
            rightIcon={toggle ? localeImage.openView : localeImage.hiddenView}
          />
          <Text style={{color: colors.red, marginLeft: vw(30)}}>
            {state.passwordError ? state.passwordError : ''}
          </Text>
          <CustomTextInput
            secureTextEntry
            value={state.confirmPass}
            leftIcon={localeImage.lock}
            placeholder="Confirm Password"
            onChangeText={handleConfirmPassChange}
            mainViewStyle={styles.textInputViewStyle}
            rightIconStyle={{tintColor: colors.purple}}
            leftIconStyle={{tintColor: colors.dark_grey}}
          />
          <Text style={{color: colors.red, marginLeft: vw(30)}}>
            {state.confirmPassError ? state.confirmPassError : ''}
          </Text>
          <CustomButton
            buttonText="Update Profile"
            onPress={_onPressSignUp}
            customButtonStyle={styles.submitButtonStyle}
          />
        </>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  profileStyle: {
    marginTop: vh(20),
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
    top: vh(185),
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
    borderWidth: 1,
    marginTop: vh(10),
    // borderBottomWidth: 1,
    marginHorizontal: vw(30),
    borderBottomColor: colors.dark_grey,
  },
  textInputStyle: {
    borderBottomWidth: 1,
    marginHorizontal: 15,
  },
  phoneViewStyle: {
    marginTop: vh(30),
    flexDirection: 'row',
    paddingBottom: vh(10),
    marginHorizontal: vw(30),
    borderBottomColor: 'grey',
  },

  phoneTextStyle: {
    marginTop: vh(7),
    fontSize: normalize(18),
  },
  phoneIconstyle: {
    marginLeft: normalize(18),
  },
  submitButtonStyle: {
    marginHorizontal: vw(20),
    marginTop: vh(50),
    marginBottom: vh(50),
  },
});
