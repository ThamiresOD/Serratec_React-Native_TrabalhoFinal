import React, { useState } from "react";
import { styles } from './styles';
import { Dimensions, FlatList, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import SearchList from "../../Search";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get('window')

const CardList = ({ data }) => {
    const navigation = useNavigation();

    // const [data, setData] = useState([])

    // function search(s) {
    //     setData(data.filter((d) => d.prodTitle.includes(s)));
    // }

    return (
        <>
            {/* // Titulo da tela */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Ecommerce</Text>
            </View>

            {/* // Lista de produtos com rolagem horizontal */}
            <FlatList
                data={data}
                keyExtractor={item => String(item)}
                showsHorizontalScrollIndicator={false}
                horizontal renderItem={({ item }) => (
                    <>
                        {/* // Formatação externa do card dos produtos */}
                        <View
                            style={{
                                backgroundColor: item.prodCardBack,
                                height: width / 0.92,
                                width: width * 0.55,
                                marginHorizontal: 10,
                                marginTop: '30%',
                                borderTopRightRadius: 180,
                                borderTopLeftRadius: 180,
                                borderBottomLeftRadius: 180,
                                borderBottomRightRadius: 180,
                            }}
                        ></View>

                        {/* // Imagem do produto */}
                        <View style={styles.imgProdCard}><Text style={styles.imgBackProd}>{item.imgProdCard}</Text></View>

                        {/* // Sobre o produto */}
                        <View style={styles.prodCardText}>
                            <Text style={styles.prodCardTextEsp}>{item.prodType}</Text>
                            <Text style={styles.prodCardTextName}>{item.prodTitle}</Text>
                            <Text style={styles.prodCardTextValue}>R$ {item.prodValue}</Text>
                        </View>

                        {/* // Botão de adicionar a uma lista -> EM CONSTRUÇÃO */}
                        <TouchableOpacity onPress={() => navigation.navigate('CardProd')}style={styles.buttonAddLocation}><Text style={styles.buttonAdd}>+</Text></TouchableOpacity>
                    </>
                )}
            />
            {/* // Função carrinho -> EM TESTE */}
            {/* <View style={styles.homeCart} >
                <Text style={styles.homeCartQt}>02</Text>
                <Text style={styles.homeCartValue}>R$ 858,52</Text>
                <Text style={styles.homeCartButton}>-</Text>
            </View> */}

            {/* // Area de pesquisa */}
            <SearchList />
            {/* <View style={styles.search}>
                <TextInput style={styles.searchText} placeholder={'pesquise aqui ...'} onChangeText={(s) => search()}></TextInput>
            </View> */}
        </>
    )
}
export default CardList;