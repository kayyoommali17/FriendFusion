import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

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
};

const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const regexPhoneNo = /^\(?([1-9]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const MyForm = () => {
  const [state, setState] = useState(initialState);

  const validateName = (name: string) => {
    if (name.length < 3) {
      setState({
        ...state,
        name,
        nameError: regexEmail.test(name)
          ? ''
          : 'Name must be at least 3 letters',
      });
    } else {
      setState({...state, name, nameError: ''});
    }
  };

  const handleEmailChange = (email: string) => {
    setState({
      ...state,
      email,
      emailError: regexEmail.test(email) ? '' : 'Invalid email',
    });
  };

  const handlePhoneChange = (phoneNumber: string) => {
    setState({
      ...state,
      phoneNumber,
      phoneError: regexPhoneNo.test(phoneNumber) ? '' : 'Invalid phone number',
    });
  };

  const handlePasswordChange = (password: string) => {
    setState({
      ...state,
      password,
      passwordError: regexPassword.test(password)
        ? ''
        : 'Invalid password, must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number and one special character',
    });
  };

  const handleConfirmPassChange = (confirmPass: string) => {
    setState({
      ...state,
      confirmPass,
      passwordError: password === confirmPass ? '' : 'Passwords do not match',
    });
  };

  //   const handleSubmit = () => {
  //     console.log('Form submitted!');
  //   };

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={validateName}
        value={state.name}
      />
      {state.nameError ? (
        <Text style={styles.error}>{state.nameError}</Text>
      ) : null}

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleEmailChange}
        value={state.email}
      />
      {state.emailError ? (
        <Text style={styles.error}>{state.emailError}</Text>
      ) : null}

      <Text>Phone Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={handlePhoneChange}
        value={state.phoneNumber}
      />
      {state.phoneError ? (
        <Text style={styles.error}>{state.phoneError}</Text>
      ) : null}

      {/* <Text>Password</Text>
      <TextInput
        style={styles.input} */}
    </View>
  );
};

export default MyForm;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
  },
  error: {
    color: 'red',
  },
});
