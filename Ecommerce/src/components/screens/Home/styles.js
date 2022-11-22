import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({

  imgBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '100%',
    zIndex: 2,
  },

  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },

  text: {
    color: '#121212',
    backgroundColor: '#f0f0f0',
    fontSize: 40,
    alignContent: 'flex-start',
  }
});
