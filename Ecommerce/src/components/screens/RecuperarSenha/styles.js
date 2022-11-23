import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#071217',
        
    },
    containerTitulo: {
        marginTop: '14%',
        paddingStart: '5%',
        paddingEnd: '5%',
        marginBottom: '8%',

    },
    titulo: {
        color: 'white',
        fontSize: 25,
        marginLeft: '1%',
    },
    card:{
        backgroundColor: 'rgba(114, 178, 147, 0.5)',
        flex:1,
        paddingStart:'5%',
        paddingEnd: '5%',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        
    },
    mensagem:{
        color: 'white',
        marginTop: '10%',
        fontSize:20,
    },
    input: {
        marginBottom:15,
        borderBottomWidth:1,
        height: '10%',
        
    },
    botao: {
        
        backgroundColor: 'rgba(114, 178, 147, 1)',
        width: '100%',
        borderRadius: 30,
        padding: '2%'
        
    },
    textoBotao:{
        textAlign: 'center',
        color: 'white',
    }
})