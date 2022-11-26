import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#071217'
    },

    
    containerLogo: {
        flex:0.55,
    
    },
    imgLogo: {
        width: '70%',
        height: '80%',
        resizeMode: 'contain',
        marginTop: '40%',
        marginHorizontal: '15%'
    },
    containerBotao: {
        flex: 0.5,
        backgroundColor: 'red',
        alignItems: 'center',
    },
    botaoAcessar: {
        padding: "2%",
        backgroundColor: 'rgba(114, 178, 147, 1)',
        width: '40%',
        borderRadius: 30,
        marginLeft: '30%',
    },
    textoBotaoAcessar:{
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
    }
})