// import React, {useRef, useState} from 'react';
// import {View, StyleSheet, Text} from 'react-native';
// import OTPTxtInput from '../custom/OtpTextInput';

// const OTPScreen = () => {
//   const [otp, setOtp] = useState<any>('');
//   const input1Ref = useRef<any>(null);
//   const input2Ref = useRef<any>(null);
//   const input3Ref = useRef<any>(null);
//   const input4Ref = useRef<any>(null);

//   const handleOnChange = (value: any, index: number) => {
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     if (value && index < 3) {
//       switch (index) {
//         case 0:
//           input2Ref.current.focus();
//           // console.log(input2Ref.current.focus());
//           break;
//         case 1:
//           input3Ref.current.focus();
//           // console.log(input3Ref.current.focus());

//           break;
//         case 2:
//           input4Ref.current.focus();
//           // console.log(input4Ref.current.focus());
//           break;
//         default:
//           break;
//       }
//     }
//   };

//   const handleOnKeyPress = (event: any, index: number) => {
//     if (event.nativeEvent.key === 'Backspace' && !otp[index]) {
//       const newOtp = [...otp];
//       newOtp[index - 1] = '';
//       setOtp(newOtp);
//       switch (index) {
//         case 1:
//           input1Ref.current.focus();
//           // console.log(input1Ref.current.focus());

//           break;
//         case 2:
//           input2Ref.current.focus();
//           // console.log(input2Ref.current.focus());

//           break;
//         case 3:
//           input3Ref.current.focus();
//           // console.log(input3Ref.current.focus());

//           break;
//         default:
//           break;
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <OTPTxtInput
//         ref={input1Ref}
//         value={otp[0]}
//         onChangeText={(value: any) => handleOnChange(value, 0)}
//         onKeyPress={(event: any) => handleOnKeyPress(event, 1)}
//       />
//       <OTPTxtInput
//         ref={input2Ref}
//         value={otp[1]}
//         onChangeText={(value: any) => handleOnChange(value, 1)}
//         onKeyPress={(event: any) => handleOnKeyPress(event, 2)}
//       />
//       <OTPTxtInput
//         ref={input3Ref}
//         value={otp[2]}
//         onChangeText={(value: any) => handleOnChange(value, 2)}
//         onKeyPress={(event: any) => handleOnKeyPress(event, 3)}
//       />
//       <OTPTxtInput
//         ref={input4Ref}
//         value={otp[3]}
//         onChangeText={(value: any) => handleOnChange(value, 3)}
//         onKeyPress={(event: any) => handleOnKeyPress(event, 4)}
//       />
//       {/* <Text>{JSON.stringify(otp)}</Text> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 300,
//   },
// });

// export default OTPScreen;

import colors from '../utils/colors';
import React, {useState} from 'react';
import languages from '../utils/languages';
import routesNames from '../utils/routesNames';
import localeImage from '../utils/localeImages';
import CustomButton from '../custom/CustomButton';
import {normalize, vh, vw} from '../utils/dimensions';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../custom/CustomTextInput';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

const OTPScreen = ({route}: any) => {
  const dispatch = useDispatch<any>();
  const [error, setError] = useState('');
  const navigation = useNavigation<any>();
  const [verificationCode, setVerificationCode] = useState<string>('');
  const otpResult = route?.params?.confirmResult;
  console.log('otp', otpResult);
  const handleOTPVerification = async () => {
    try {
      const resp = await otpResult?.confirm(verificationCode);
      // The phone number is now verified, navigate to the home screen or the next screen in your app
      console.log('otp', resp?.user?.uid);
      dispatch({type: 'UserId', payload: resp?.user?.uid});
      navigation.navigate(routesNames.topTaps);
    } catch (error) {
      console.log(error);
      setError('wrong otp!');
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.logoImageStyle} source={localeImage.paswordGif} />
      <Text style={styles.loginTextStyle}>{languages.appLogo}</Text>
      <Text numberOfLines={2} style={styles.greetingTextStyle}>
        {languages.oneMoreStep}
      </Text>
      <CustomTextInput
        placeholder="Enter Otp"
        onChangeText={setVerificationCode}
        mainViewStyle={[
          styles.customTextInputStyle,
          {
            borderColor:
              verificationCode.length > 0 ? colors.darkGreen : colors.black,
          },
        ]}
      />
      <Text style={styles.errorMsgStyle}>{error || null}</Text>
      <CustomButton onPress={handleOTPVerification} buttonText="Verify" />
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: vw(20),
    backgroundColor: colors.white,
  },
  logoImageStyle: {
    width: vw(150),
    height: vw(150),
    alignSelf: 'center',
  },
  loginTextStyle: {
    fontWeight: '500',
    marginTop: vh(10),
    textAlign: 'center',
    color: colors.black,
    fontSize: normalize(18),
  },
  greetingTextStyle: {
    opacity: 0.7,
    textAlign: 'center',
    color: colors.black,
    marginVertical: vh(10),
  },
  errorMsgStyle: {
    color: colors.red,
    marginLeft: vw(10),
    marginTop: vh(10),
  },
  customTextInputStyle: {
    borderRadius: vw(10),
  },
});
