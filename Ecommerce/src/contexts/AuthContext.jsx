import { createContext, useState,useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from "../services/login";
import api from "../services/api";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState();

    //LOGIN TABAJARA (INCOMPLETO)
    async function loginContext() {
        const response = await login();
        if (response.user && response.token) {
            setUser(response.user)
            api.defaults.headers['Authorization'] = `Bearer ${response.token}`

            await AsyncStorage.setItem("@app_user", JSON.stringify(response.user))
            await AsyncStorage.setItem("@app_token", response.token)
        }
        console.log("LOGIN CONTEXT: ", response)
    }

    function logoutContext() {
        setUser(null)
        AsyncStorage.clear()
    }

    // CHECK STORAGE 
    useEffect(() => {
        async function verificaStorage() {
            const userStorage = await AsyncStorage.getItem("@app_user")
            const tokenStorage = await AsyncStorage.getItem("@app_token")

            if (userStorage != null && tokenStorage != null){
                setUser(JSON.parse(userStorage))
                api.defaults.header['Authorization'] = `Bearer ${tokenStorage}`
            }
        }
        verificaStorage()       
    }, [])


    return (
        <AuthContext.Provider value={{logado: !!user, loginContext, logoutContext}}>
            {children}
        </AuthContext.Provider>
    )
}