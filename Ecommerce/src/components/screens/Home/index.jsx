import { Text, SafeAreaView, ImageBackground } from 'react-native';
import backgroundHome from '../../Images/3.jpg';
import CardList from '../CardList';
import { styles } from './styles';
// import img01 from '../../Images/amarelo.jpg';
// import img02 from '../../Images/verde.jpg';
// import img03 from '../../Images/roxo.jpg';
// import img04 from '../../Images/azul.jpg';

function Home() {
  const prodCardBack = [
    // '#F0F4F2',
    // '#071217',
    '#93CA90', 
    '#72B293', 
    '#153033', 
    '#6FC7A7',
    '#133B4A', 
  ]
  
  const data = [
    {prodCardBack: '#93CA90', imgProdCard: '../../Images/amarelo.jpg'},
    {prodCardBack: '#72B293', imgProdCard: '../../Images/roxo.jpg'},
    {prodCardBack: '#153033', imgProdCard: '../../Images/azul.jpg'},
    {prodCardBack: '#6FC7A7', imgProdCard: '../../Images/verde.jpg'},
    {prodCardBack: '#133B4A', imgProdCard: '../../Images/amarelo.jpg'},
  ]

  return (
    <ImageBackground source={backgroundHome} style={styles.imgBackground}>
      <SafeAreaView>
        <CardList  data={data}/>
      </SafeAreaView>
    </ImageBackground>
  );
}
export default Home;