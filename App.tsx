import React from 'react';
import {Provider} from 'react-redux';
import AppRoutes from './src/routes/AppRoutes';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <>
      {/* <MyForm /> */}
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppRoutes />
        </PersistGate>
      </Provider>
      {/* <SafeAreaProvider>
        <SignUp />
      </SafeAreaProvider> */}
    </>
  );
};

export default App;
