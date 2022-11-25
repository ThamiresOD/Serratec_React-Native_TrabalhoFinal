import { useContext } from "react"
import { Button, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { AuthContext } from "../../../contexts/AuthContext"

function Logout() {
    const { logoutContext } = useContext(AuthContext)

    function handleLogout() {
        logoutContext()
    }

    return (
        <TouchableOpacity onPress={handleLogout}>
            <Text>LOGOUT</Text>
        </TouchableOpacity>
    )
}

export default Logout