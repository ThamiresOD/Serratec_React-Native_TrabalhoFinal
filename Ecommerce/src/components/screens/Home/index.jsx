import { Text, View, ImageBackground } from 'react-native';
import background from '../../Images/3.jpg';
import { styles } from './styles';

function Home() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ImageBackground
          source={background}
          style={styles.imgBackground}
          >
          <Text style={styles.text}>Produtos</Text>
          </ImageBackground>
      </View>
    );
}
export default Home;