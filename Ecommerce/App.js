import 'react-native-gesture-handler';
import React from "react";
import Routes from "./src/routes";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from './src/contexts/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#72B293' barStyle='light-content' />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}
