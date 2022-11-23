// import React, { useState } from "react";
import { styles } from './styles';
import { SafeAreaView, ImageBackground } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import backgroundHome from '../../Images/3.jpg';


const CardProd = (/*{ data }*/) => {

    return (
        <>
            <ImageBackground source={backgroundHome} style={styles.imgBackground}>
                <SafeAreaView>
                    {/* // Titulo do produto  */}
                    <View style={styles.header}>
                        <Text style={styles.headerText}>prodTitle</Text>
                    </View>

                    {/* // Imagem do produto */}
                    <View style={styles.imgBackCardProd}>
                        <Text style={styles.imgCardProd}>imgProdCard</Text>
                    </View>

                    {/* // Sobre o produto */}
                    <View style={styles.prodCardText}>
                        <Text style={styles.prodCardStartIcon}>estrelinhas</Text>
                        <Text style={styles.prodCardTextEsp}>prodType</Text>
                        <Text style={styles.prodCardTextQt}>prodQt und.</Text>
                        <Text style={styles.prodCardTextDescri}>prodDescri prodDescri prodDescri prodDescri prodDescri  prodDescri prodDescri prodDescri.  </Text>
                        <Text style={styles.prodCardTextValue}>R$ prodValue</Text>
                    </View>

                    {/* // Botões de edição */}
                    <View style={styles.areaEdit}>
                        <TouchableOpacity style={styles.prodEdit}>
                            <Text style={styles.prodEditText}>Edit</Text>
                        </TouchableOpacity>

                        {/* // Botão para desativar um produto temporariamente -> EM CONSTRUÇÃO */}
                        {/* <View style={styles.prodEdit} >
                            <TouchableOpacity>
                                <Text style={styles.prodEditText}>Desativar</Text>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </>
    )
}
export default CardProd;
