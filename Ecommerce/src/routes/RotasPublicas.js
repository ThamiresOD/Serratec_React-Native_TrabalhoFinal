import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "../components/screens/Login";
import { RecuperarSenha } from "../components/screens/RecuperarSenha";
import { Welcome } from "../components/screens/Welcome";

const Stack = createNativeStackNavigator();

export function RotasPublicas() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{title: 'Meu Login', headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{title: 'Meu Login', headerShown: false}} />
            <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}/>
        </Stack.Navigator>
    )
}