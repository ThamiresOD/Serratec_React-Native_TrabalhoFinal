import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../components/screens/Welcome";
import { Login } from "../components/screens/Login";
import { Home } from "../components/screens/Home"
import { RecuperarSenha } from "../components/screens/RecuperarSenha";

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
        </Stack.Navigator>
    )
}