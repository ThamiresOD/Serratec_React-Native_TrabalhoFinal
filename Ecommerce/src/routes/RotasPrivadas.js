import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardProd from "../components/screens/CardProd";
import SobreNos from "../components/screens/SobreNos";
import Home from "../components/screens/Home"
import Logout from "../components/screens/Logout";

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

function HomeStack() {
    return( 
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Produto" component={CardProd} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export function RotasPrivadas() {
    return(
           <Drawer.Navigator>
            <Drawer.Screen name="Produtos" component={HomeStack} options={{headerTitle: "Produtos"}} />
            <Drawer.Screen name="Sobre Nós" component={SobreNos} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    )   
}