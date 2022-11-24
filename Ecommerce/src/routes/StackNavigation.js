import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { Welcome } from "../components/screens/Welcome";
// import { Login } from "../components/screens/Login";
// import { RecuperarSenha } from "../components/screens/RecuperarSenha";
// import Home from "../components/screens/Home";
// import SobreNos from "../components/screens/SobreNos";
// import CardProd from "../components/screens/CardProd";

import { HomeNavigation, SobreNavigation } from './DrawerNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RecuperarSenha"
                component={RecuperarSenha}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen
                name="Home"
                component={HomeNavigation}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen
                name="CardProd"
                component={ProdNavigation}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen
                name="SobreNos" 
                component={SobreNavigation}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
