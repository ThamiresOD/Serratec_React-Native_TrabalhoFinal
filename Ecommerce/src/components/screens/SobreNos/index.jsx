import { StyleSheet, Text, View, ImageBackground } from 'react-native';


import background from '../../Images/Background.jpg'

function SobreNos() {
    return (
        <ImageBackground source={background} style={styles.imgBackground}>

            <View style={styles.container}>

                <View style={styles.colaborador}>

                    <Text style={styles.textoColaboradores}>COLABORADORES</Text>

                </View>

                <View style={styles.texto}>

                    <Text style={styles.text}>BÁRBARA BATISTA DE SOUZA</Text>
                    <Text style={styles.text}>THAMIRES OUVERNEY DARCI</Text>
                    <Text style={styles.text}>JOSÉ AILTON LOPES JUNIOR</Text>
                    <Text style={styles.text}>BRENO LEONARDO FERREIRA DE PAULA</Text>
                    <Text style={styles.text}>LEONARDO DE ALMEIDA AMMON</Text>
                </View>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    imgBackground: {
        flex: 1,
        width: 450,
        height: "100%"
    },
    container: {
        flex: 1,

    },
    colaborador: {
        flex: 0.1,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        padding: 35,
        fontWeight: "bold",

    },
    textoColaboradores: {
        color: "#f2f2f2",
        fontSize: 30,
    },
    texto: {
        flex: 1,
        position: "absolute",
        top: "15%",
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        padding: 30,
        // backgroundColor: 'blue',


    },
    text: {
        color: "#f2f2f2",
        fontSize: 20,
        marginBottom: 50
    }
});

export default SobreNos;