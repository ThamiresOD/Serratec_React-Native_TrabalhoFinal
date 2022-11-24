import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../components/screens/Welcome";
import { Login } from "../components/screens/Login";
import { RecuperarSenha } from "../components/screens/RecuperarSenha";
import SobreNos from "../components/screens/SobreNos";
import Home from "../components/screens/Home";
import CardProd from '../components/screens/CardProd';

const Stack = createNativeStackNavigator();

export default function Routes () {
    return(
        
        <Stack.Navigator>
            <Stack.Screen  
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false}}
            />
            <Stack.Screen  
                name="Login"
                component={Login}
                options={{ headerShown: false}}
            />
            <Stack.Screen  
                name="RecuperarSenha"
                component={RecuperarSenha}
                options={{ headerShown: false}}
            />
            <Stack.Screen  
                name="SobreNos"
                component={SobreNos}
                options={{ headerShown: false}}
            />
            <Stack.Screen  
                name="Home"
                component={Home}
                options={{ headerShown: false}}
            />
            <Stack.Screen  
                name="CardProd"
                component={CardProd}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}