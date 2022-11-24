import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import StackNavigation from './StackNavigation'
// import SobreNos from '../components/screens/SobreNos';
import { Login } from '../components/screens/Login';
import Home from "../components/screens/Home";
import CardProd from "../components/screens/CardProd";
import { Welcome } from "../components/screens/Welcome";


const Drawer = createDrawerNavigator();

export function HomeNavigation() {
  return (
      <Drawer.Navigator>
        {/* <Drawer.Screen name="LoginDrawer" component={Login} />
        <Drawer.Screen name="WelcomeDrawer" component={StackNavigation} />
        <Drawer.Screen name="RecuperarSenhaDrawer" component={StackNavigation} /> */}
        <Drawer.Screen name="Welcome" component={Welcome} />
        <Drawer.Screen name="Login" component={Login} />
        {/* <Drawer.Screen name="SobreDrawer" component={StackNavigation} /> */}
      </Drawer.Navigator>
  );
}

export function SobreNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeDrawer" component={Home} />
      <Drawer.Screen name="CardProdDrawer" component={CardProd} />
      {/* <Drawer.Screen name="SobreDrawer" component={SobreNos} /> */}
    </Drawer.Navigator>
  )
}

// export function ProdNavigation() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="HomeDrawer" component={StackNavigation} />
//       <Drawer.Screen name="CardProdDrawer" component={StackNavigation} />
//       {/* <Drawer.Screen name="SobreDrawer" component={SobreNos} /> */}
//     </Drawer.Navigator>
//   )
// }