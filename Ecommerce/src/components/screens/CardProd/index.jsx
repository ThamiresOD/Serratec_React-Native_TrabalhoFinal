// import React, { useState } from "react";
import { styles } from './styles';
import { SafeAreaView, ImageBackground, View, Text, TouchableOpacity, Image } from 'react-native';
import backgroundHome from "../../Images/background.jpg"


const CardProd = ({ data }) => {


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
                        <Image style={styles.imgCardProd} source={require('../../Images/amarelo.jpg')}></Image>
                    </View>

                    {/* // Sobre o produto */}
                    <View style={styles.prodCardText}>
                        <Text style={styles.prodCardTextEsp}>prodType</Text>
                        <Text style={styles.prodCardTextQt}>prodQt und.</Text>
                        <Text style={styles.prodCardTextDescri}>prodDescri prodDescri prodDescri prodDescri prodDescri  prodDescri prodDescri prodDescri.  </Text>
                        <Text style={styles.prodCardTextValue}>R$ prodValue</Text>
                    </View>

                    {/* // Botões de edição */}
                    <View style={styles.areaEdit}>
                        <TouchableOpacity style={styles.prodEdit}>
                            <Text style={styles.prodEditText}>Novo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.prodEdit}>
                            <Text style={styles.prodEditText}>Editar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.prodEdit}>
                            <Text style={styles.prodEditText}>Excluir</Text>
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
