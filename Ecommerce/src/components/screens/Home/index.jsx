import { Text, SafeAreaView, ImageBackground } from 'react-native';
import background from '../../Images/3.jpg';
import CardList from '../CardList';
import { styles } from './styles';

function Home() {
  const data = [
    // '#071217', //Verde Escuro Background
    '#93CA90', //Vede Claro
    '#72B293', //Verde
    '#153033', //Verde escuro
    // '#F0F4F2', //Branco
    '#6FC7A7', //Verde Cards
    '#133B4A', //Azul font
  ]

  return (
    <ImageBackground source={background} style={styles.imgBackground}>
      <SafeAreaView>
        <CardList  data={data}/>
        <Text style={styles.text}>Buuuuh</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}
export default Home;