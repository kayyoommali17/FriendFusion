import React from 'react';
import TopTabs from './TopTabs';
import Login from '../auth/Login';
import Header from '../custom/Header';
import {StyleSheet} from 'react-native';
import Profile from '../screens/profile/Profile';
import OTPScreen from '../auth/OtpScreen';
import SplashScreen from '../screens/splash/Splash';
import routesNames from '../utils/routesNames';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routesNames.splash}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={routesNames.splash}
          component={SplashScreen}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={routesNames.login}
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={routesNames.otp}
          component={OTPScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={routesNames.profile}
          component={Profile}
        />
        <Stack.Screen
          options={{
            header: props => {
              return <Header defaultProps={props} />;
            },
          }}
          name={routesNames.topTaps}
          component={TopTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;

const styles = StyleSheet.create({});
