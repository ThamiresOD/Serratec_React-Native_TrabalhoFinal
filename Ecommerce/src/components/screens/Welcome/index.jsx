import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

export const Welcome = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation='flipInY'
                    source={require('../../Images/logo.jpg')}
                    style={styles.imgLogo}
                />
            </View>
            <Animatable.View animation='flipInY' style={styles.container.botao}>
                <TouchableOpacity
                    style={styles.botaoAcessar}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textoBotaoAcessar}>Access</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>


    )
}