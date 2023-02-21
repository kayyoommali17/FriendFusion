import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import routesNames from '../../utils/routesNames';

const ChatScreen = () => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>ChatScreen</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch({type: 'UserId', payload: ''});
          navigation.navigate(routesNames.login);
        }}>
        <Text style={{fontSize: 30}}>{'logout'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
