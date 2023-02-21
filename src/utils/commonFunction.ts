// validation.ts
import React from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const regexPhoneNo = /^\(?([1-9]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const validateName = (name: string): string => {
  if (name.length === 0) {
    return 'Please enter a valid name.';
  } else if (name.length < 3) {
    return 'Name should be minimum 3 characters.';
  } else if (!regexName.test(name)) {
    return 'Please enter a valid name.';
  }
  return '';
};

export const validateEmail = (email: string): string => {
  if (!regexEmail.test(email)) {
    return 'Please enter a valid email address.';
  }
  return '';
};

export const validatePhoneNumber = (phone: string): string => {
  if (!regexPhoneNo.test(phone)) {
    return 'Please enter a valid phone number.';
  } else {
    return '';
  }
};

export const validatePassword = (password: string): string => {
  if (password.length === 0) {
    return 'Please enter password';
  } else if (regexPassword.test(password) === false) {
    return 'Invalid password, must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number and one special character';
  } else if (!regexPassword.test(password)) {
    return 'Please enter a valid password.';
  }
  return '';
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string,
): string => {
  if (password !== confirmPassword) {
    return 'Passwords do not match.';
  }
  return '';
};
