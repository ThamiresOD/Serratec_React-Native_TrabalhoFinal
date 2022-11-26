import { useContext } from "react"
import { Text, ImageBackground, StyleSheet, SafeAreaView, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { AuthContext } from "../../../contexts/AuthContext"

function Logout() {
    const { logoutContext } = useContext(AuthContext)

    function handleLogout() {
        logoutContext()
    }

    return (
        <ImageBackground source={require('../../Images/Background.jpg')}
            style={styles.imgBack}>
            <SafeAreaView>
                    <TouchableOpacity style={styles.botaoLogout}
                        onPress={handleLogout}>
                        <Text style={styles.textoBotao}>LOGOUT</Text>
                    </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imgBack: {
        flex: 1,
        width: 450,
        height: "100%",
    },
    botaoLogout: {
        padding: "2%",
        backgroundColor: 'rgba(114, 178, 147, 1)',
        width: '40%',
        borderRadius: 30,
        marginLeft: '25%',
        marginTop: '100%',
    },
    textoBotao: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
    }
})

export default Logout