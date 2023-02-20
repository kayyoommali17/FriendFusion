import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import AppRoutes from './src/routes/AppRoutes';
import Profile from './src/screens/profile/Profile';
import Header from './src/custom/Header';
import HeaderNavigation from './src/custom/Header';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Heart from './src/custom/loader/heart';
import SmoothLoader from './src/custom/loader';
import SignUp from './src/auth/SignUp';
import MyForm from './src/test/test1';

const App = () => {
  return (
    <>
      {/* <MyForm /> */}
      {/* <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppRoutes />
          </PersistGate>
        </Provider> */}
      <SafeAreaProvider>
        <SignUp />
      </SafeAreaProvider>
    </>
  );
};

export default App;
