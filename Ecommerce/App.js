import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#f0f0f0',
    backgroundColor: '#121212',
    fontSize: 12,
    alignContent: 'flex-start',
  }
});
