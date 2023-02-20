import colors from '../utils/colors';
import React, {useState} from 'react';
import languages from '../utils/languages';
import {regexPhoneNo} from '../utils/constant';
import auth from '@react-native-firebase/auth';
import routesNames from '../utils/routesNames';
import localeImage from '../utils/localeImages';
import CustomButton from '../custom/CustomButton';
import {normalize, vh, vw} from '../utils/dimensions';
import TouchableImage from '../custom/TouchableImage';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../custom/CustomTextInput';
import {Image, StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';

const Login = () => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();
  const [focused, setFocused] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<string>('');
  const [PhoneNumber, setPhoneNumber] = useState<string>('');

  const checked = focused && PhoneNumber.length > 9;

  /**
   * @_handlePhoneAuth Function
   * @description checking firebase phone login
   */
  const _handlePhoneAuth = async () => {
    try {
      const confirmResult = await auth().signInWithPhoneNumber(
        `+91${PhoneNumber}`,
      );
      dispatch({type: 'User_Number', payload: PhoneNumber});
      navigation.navigate(routesNames.otp, {confirmResult});
      console.log(confirmResult);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * @_toggle Function
   * @description togglling check
   */
  const _toggle = () => {
    setFocused(!focused);
  };

  /**
   * @handleValidMobno Function
   * @description checking the mobile number is valid or not using regex
   */
  const handleValidMobno = (val: any) => {
    if (val.length === 0) {
      setPhoneError('Please enter mobile number');
      setFocused(false);
    } else if (regexPhoneNo.test(val) == false) {
      setPhoneError('Mobile number must contain 10 digits');
      setFocused(false);
    } else if (regexPhoneNo.test(val) == true) {
      setPhoneError('');
      setFocused(true);
    }
  };

  /**
   * @_onChangeText Function
   * @description onchangeText handle regex and setPhoneNumber
   */
  const _onChangeText = (text: string) => {
    setPhoneNumber(text);
    handleValidMobno(text);
  };

  /**
   * @_numberError Function
   * @description setting bordercolor of Textinput
   */
  const _numberError = () => {
    if (phoneError.length === 0 && PhoneNumber.length === 0) {
      return colors.black;
    } else if (phoneError) {
      return colors.red;
    } else {
      return colors.darkGreen;
    }
  };
  return (
    <KeyboardAwareScrollView
      extraHeight={30}
      showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainerStyle}>
        <Image style={styles.logoImageStyle} source={localeImage.logo} />
        <Text style={styles.loginTextStyle}>{languages.login}</Text>
        <Text style={styles.greetingTextStyle}>{languages.hello}</Text>
        <CustomTextInput
          leftText="+91"
          maxLength={10}
          value={PhoneNumber}
          keyboardType={'number-pad'}
          onChangeText={_onChangeText}
          placeholder="Your phone number"
          mainViewStyle={[
            styles.customInputStyle,

            {
              borderColor: _numberError(),
            },
          ]}
          TextInputstyle={styles.textInputStyle}
        />
        <Text style={styles.errorMsgStyle}>
          {phoneError ? phoneError : null}
        </Text>
        <View style={styles.checkUncheckStyle}>
          {focused ? (
            <TouchableImage
              onPress={_toggle}
              imageStyle={styles.checkImageStyle}
              source={localeImage.check}
            />
          ) : (
            <TouchableImage
              onPress={_toggle}
              imageStyle={styles.unCheckImageStyle}
              source={localeImage.uncheck}
            />
          )}
          <Text style={styles.keepSignedInTextStyle}>
            {languages.keepMeSigned}
          </Text>
        </View>

        <CustomButton
          disabled={!checked}
          onPress={_handlePhoneAuth}
          customButtonStyle={{
            backgroundColor: checked ? colors.purple : colors.dark_grey,
          }}
          buttonText={languages.next}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Login;

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    marginHorizontal: vw(20),
  },
  logoImageStyle: {
    height: vw(150),
    width: vw(150),
    alignSelf: 'center',
    marginTop: vh(100),
  },
  loginTextStyle: {
    fontWeight: '500',
    marginTop: vh(60),
    color: colors.black,
    fontSize: normalize(18),
  },
  greetingTextStyle: {
    color: colors.dark_grey,
  },
  textInputStyle: {
    borderRadius: normalize(10),
    paddingHorizontal: normalize(10),
  },
  customInputStyle: {
    marginTop: vh(30),
    borderRadius: normalize(10),
  },
  checkUncheckStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(20),
    marginLeft: vw(10),
  },
  checkImageStyle: {
    height: vw(20),
    width: vw(20),
  },
  unCheckImageStyle: {
    height: vw(20),
    width: vw(20),
    tintColor: colors.purple,
  },
  keepSignedInTextStyle: {
    marginLeft: vw(20),
    color: colors.black,
    fontSize: normalize(16),
    fontWeight: '500',
  },
  errorMsgStyle: {
    color: colors.red,
    marginLeft: vw(10),
    marginTop: vh(10),
  },
});
