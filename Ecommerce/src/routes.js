import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./components/screens/Home";
import SobreNos from "./components/screens/SobreNos";


const Tab = createBottomTabNavigator();

export default function Routes(){
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Sobre" component={SobreNos}/>
    </Tab.Navigator>
}