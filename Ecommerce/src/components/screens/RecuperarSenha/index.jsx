import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import * as Animatable from 'react-native-animatable'

export const RecuperarSenha = () => {
    return(
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={600} style={styles.containerTitulo}>
                <Text style={styles.titulo}>Recuperar senha</Text>
            </Animatable.View>
            <Animatable.View animation='fadeInUp' delay={600} style={styles.card}>
                <Text style={styles.mensagem}>Insira seu email para recuperar a sua conta</Text>
                <TextInput style={styles.input}
                    placeholder='Digite seu email...'
                />
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Enviar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}