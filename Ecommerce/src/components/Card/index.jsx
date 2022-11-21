import { Text } from "react-native"
import { styles } from './styles'

const Card = ({ item }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{item.titulo}</Text>
            <Text style={styles.text}>{item.descricao}</Text>
        </View>
    )
}
export default Card