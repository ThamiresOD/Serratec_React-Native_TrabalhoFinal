import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { styles } from "./src/components/screens/Login/styles";

export default function App() {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor='#72B293' barStyle='light-content' />
      <Routes />
    </NavigationContainer>  
  )
}
