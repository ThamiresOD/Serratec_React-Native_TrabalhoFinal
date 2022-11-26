import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, } from "react-native";
import { styles } from "./styles";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../contexts/AuthContext";


export const Login = () => {
  const { loginContext } = useContext(AuthContext)
  const navigation = useNavigation()
  async function handleLogin() {
    loginContext()
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation='fadeInDown'
          source={require('../../Images/logo.jpg')}
          style={styles.imgLogo}
        />
      </View>
      <Animatable.View
        animation='fadeInUp' delay={600}
        style={styles.listaInput}>
        <View style={styles.Input1}>
          <TextInput style={styles.textoInput1}
            placeholder="Digite seu login" />
        </View>

        <View style={styles.Input2}>
          <TextInput style={styles.textoInput2}
            placeholder="Digite sua senha" />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('RecuperarSenha')}><Text style={styles.textoBotao}>Esqueci minha senha</Text></TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.botaoLogin}><Text style={styles.textoBotaoLogin}>Log In</Text></TouchableOpacity>
      </Animatable.View>
    </View>
  )
}