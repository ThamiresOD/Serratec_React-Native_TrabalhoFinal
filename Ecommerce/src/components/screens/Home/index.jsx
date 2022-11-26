import { useEffect } from 'react';
import { SafeAreaView, ImageBackground } from 'react-native';
import { getAllProd } from '../../../services/crudClient';
import backgroundHome from '../../Images/Background.jpg';
import CardList from '../CardList';
import { styles } from './styles';

export default function Home() {
  const [data, setData] = useState(null)

  async function handleData() {
    setData(await getAllProd())
  }

  useEffect(() => {
    handleData()
  }, [])

  return (
    <ImageBackground source={backgroundHome} style={styles.imgBackground}>
      <SafeAreaView>
        <CardList data={data} />
      </SafeAreaView>
    </ImageBackground>
  );
}
