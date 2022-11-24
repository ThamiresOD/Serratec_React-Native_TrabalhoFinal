import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import background from '../../Images/2.jpg'

function SobreNos() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ImageBackground source={background} style={styles.imgBackground}>

                <View style={styles.colaborador}>
                    <Text style={styles.colaboradores}>COLABORADORES</Text>

                </View>

                <View style={styles.texto}>

                    <Text style={styles.text}>BÁRBARA BATISTA DE SOUZA</Text>
                    <Text style={styles.text}>THAMIRES OUVERNEY DARCI</Text>
                    <Text style={styles.text}>JOSÉ AILTON LOPES JUNIOR</Text>
                    <Text style={styles.text}>BRENO LEONARDO FERREIRA DE PAULA</Text>
                    <Text style={styles.text}>LEONARDO DE ALMEIDA AMMON</Text>
                </View>
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    imgBackground: {
        flex: 1,
        width: 450, 
        height: "100%"
    },
    colaborador: {
        top: "20%",
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        padding: 35,
        fontWeight: "bold",
    },
    colaboradores: {
        color: "#f2f2f2",
        marginTop: 20,
        fontSize: 30,
    },
    texto: {
        position: "absolute",
        top: "15%",
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        padding: 35,
        
    },
    text: {
        color: "#f2f2f2",
        marginTop: 20,
        fontSize: 20,
    }
  });

export default SobreNos;