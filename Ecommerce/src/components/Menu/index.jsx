import { styles } from './styles';
import { View, TouchableOpacity } from 'react-native';
import MyDrawer from '../../../routes/drawer';

function Menu() {  
    return (
      <View style={styles.header}>
          <TouchableOpacity onPress={MyDrawer} style={styles.header}>
            <Text style={styles.hamburguer}>burgin</Text>
          </TouchableOpacity>
      </View>
    )
}
export default Menu;