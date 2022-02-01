import React from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import ButtonRedux from './src/componentes/ButtonRedux';
import Counter from './src/componentes/Counter';

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Counter />
        <ButtonRedux />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
