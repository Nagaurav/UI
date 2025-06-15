import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthNavigator from './my-new-app/src/navigation/AuthNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthNavigator />
    </SafeAreaProvider>
  );
} 