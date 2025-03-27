import './gesture-handler';

import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootNavigator } from './src/navigators';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={styles.container}>
        <StatusBar
          backgroundColor={'#1F1F29'}
        />
        <RootNavigator />
      </GestureHandlerRootView>
    </QueryClientProvider>

  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F29',
  },
});
