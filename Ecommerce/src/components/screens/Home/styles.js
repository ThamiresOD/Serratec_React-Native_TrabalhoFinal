import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
    },
  
    imgBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center",
      width: '100%',
      height: '100%',
      zIndex: 2,
    },
  
    text: {
      color: '#fff',
      fontSize: 40,
      alignContent: 'flex-start',
    }
  });
