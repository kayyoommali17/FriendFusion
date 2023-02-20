import React, {forwardRef} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const OTPTxtInput = forwardRef((props: any, ref: any) => {
  return (
    <TextInput
      ref={ref}
      style={[styles.otpTxtInput, props.style]}
      maxLength={1}
      keyboardType="number-pad"
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
});

const styles = StyleSheet.create({
  otpTxtInput: {
    height: 40,
    width: 40,
    borderRadius: 5,
    borderColor: '#a0a0a0',
    borderWidth: 1,
    textAlign: 'center',
    marginHorizontal: 5,
    fontSize: 16,
  },
});

export default OTPTxtInput;
