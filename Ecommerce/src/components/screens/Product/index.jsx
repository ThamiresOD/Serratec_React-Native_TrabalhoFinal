import { Text } from "react-native"
import { styles } from './styles'

const Product = ({ item }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{item.img}</Text>
            <Text style={styles.text}>{item.titulo}</Text>
            <Text style={styles.text}>{item.type}</Text>
            <Text style={styles.text}>{item.descricao}</Text>
            <Text style={styles.text}>{item.value}</Text>
        </View>
    )
}
export default Product