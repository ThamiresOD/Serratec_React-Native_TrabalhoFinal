import { styles } from './styles';
import { View, TouchableOpacity } from 'react-native';


function Header() {  
    return (
      <View style={styles.header}>
          <TouchableOpacity><Text>Olá</Text></TouchableOpacity>
      </View>
    )
}
export default Header;