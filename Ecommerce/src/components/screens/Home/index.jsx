import { SafeAreaView, ImageBackground } from 'react-native';
import backgroundHome from '../../Images/Background.jpg';
import CardList from '../CardList';
import { styles } from './styles';

export default function Home() {
  
  const data = [
    {id:1, prodCardBack: '#93CA90', imgProdCard: '../../Images/amarelo.jpg', prodType: 'Sementes', prodTitle: 'Ypê Amarelo', prodValue: 50.00},
    {id:2, prodCardBack: '#72B293', imgProdCard: '../../Images/roxo.jpg', prodType: 'Sementes', prodTitle: 'Ypê Roxo', prodValue: 150.00},
    {id:3, prodCardBack: '#153033', imgProdCard: '../../Images/azul.jpg', prodType: 'Mudas', prodTitle: 'Ypê Azul', prodValue: 350.00},
    {id:4, prodCardBack: '#6FC7A7', imgProdCard: '../../Images/verde.jpg', prodType: 'Sementes', prodTitle: 'Ypê Verde', prodValue: 100.00},
    {id:5, prodCardBack: '#133B4A', imgProdCard: '../../Images/amarelo.jpg', prodType: 'Mudas', prodTitle: 'Ypê Amarelo', prodValue: 250.00},
    {id:6, prodCardBack: '#93CA90', imgProdCard: '../../Images/amarelo.jpg', prodType: 'Sementes', prodTitle: 'Ypê Amarelo', prodValue: 50.00},
    {id:7, prodCardBack: '#72B293', imgProdCard: '../../Images/roxo.jpg', prodType: 'Sementes', prodTitle: 'Ypê Roxo', prodValue: 150.00},
    {id:8, prodCardBack: '#153033', imgProdCard: '../../Images/azul.jpg', prodType: 'Mudas', prodTitle: 'Ypê Azul', prodValue: 350.00},
    {id:9, prodCardBack: '#6FC7A7', imgProdCard: '../../Images/verde.jpg', prodType: 'Sementes', prodTitle: 'Ypê Verde', prodValue: 100.00},
    {id:10, prodCardBack: '#133B4A', imgProdCard: '../../Images/amarelo.jpg', prodType: 'Mudas', prodTitle: 'Ypê Amarelo', prodValue: 250.00},
  ]

  return (
    <ImageBackground source={backgroundHome} style={styles.imgBackground}>
      <SafeAreaView>
        <CardList  data={data}/>
      </SafeAreaView>
    </ImageBackground>
  );
}
