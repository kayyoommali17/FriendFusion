import React from 'react';
import {Provider} from 'react-redux';
import AppRoutes from './src/routes/AppRoutes';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Profile from './src/screens/profile/Profile';
import Test from './src/test/test2';
import SubscribeButton from './src/test/test3';
import SignUp from './src/auth/SignUp';
import ProductS from './src/test/Product';
import MainListing from './src/products';

const App = () => {
  return (
    <>
      {/* <MyForm /> */}
      {/* <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppRoutes />
        </PersistGate>
      </Provider> */}
      {/* <SafeAreaProvider>
        <Profile /> */}
      {/* <SignUp /> */}
      {/* </SafeAreaProvider> */}
      {/* <SubscribeButton /> */}
      <ProductS />
    </>
  );
};

export default App;
