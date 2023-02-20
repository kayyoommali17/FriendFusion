import React from 'react';
import colors from '../utils/colors';
import {Image, Text} from 'react-native';
import routesNames from '../utils/routesNames';
import ChatScreen from '../screens/chat/ChatScreen';
import HomeScreen from '../screens/home/HomeScreen';
import localeImage from '../utils/localeImages';
import StatusScreen from '../screens/status/StatusScreen';
import CameraScreen from '../screens/camera/CameraScreen';
import {normalize, vh, vw} from '../utils/dimensions';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={routesNames.chats}
      screenOptions={{
        tabBarShowIcon: true,
        tabBarActiveTintColor: colors.white,
        tabBarStyle: {backgroundColor: colors.purple},
        tabBarLabelStyle: {fontSize: normalize(14), fontWeight: '800'},
        tabBarIndicatorStyle: {
          height: vh(3),
          backgroundColor: colors.white,
        },
      }}>
      <Tab.Screen
        name={routesNames.camera}
        component={CameraScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={localeImage.camera}
              style={{
                width: vw(25),
                height: vw(25),
                resizeMode: 'cover',
                tintColor: focused ? colors.white : colors.shade_grey,
              }}
            />
          ),
        }}
      />
      <Tab.Screen name={routesNames.chats} component={ChatScreen} />
      <Tab.Screen name={routesNames.status} component={StatusScreen} />
      <Tab.Screen name={routesNames.calls} component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TopTabs;
