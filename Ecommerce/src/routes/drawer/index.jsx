import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../../components/screens/Home";
import SobreNos from "../../components/screens/SobreNos";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Sobre" component={SobreNos} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}