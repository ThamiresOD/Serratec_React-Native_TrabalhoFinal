import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation'

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="WelcomeDrawer" component={StackNavigation} />
        <Drawer.Screen name="LoginDrawer" component={StackNavigation} />
        <Drawer.Screen name="RecuperarSenhaDrawer" component={StackNavigation} />
        <Drawer.Screen name="CardProdDrawer" component={StackNavigation} />
        <Drawer.Screen name="HomeDrawer" component={StackNavigation} />
        <Drawer.Screen name="SobreDrawer" component={StackNavigation} />
      </Drawer.Navigator>
  );
}