import React from 'react';
import {SafeAreaView} from 'react-native';
import {HomeScreen} from './src/screens';
import {themeColors} from './src/config';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: themeColors.secondary}}>
        <HomeScreen />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};
export default App;
