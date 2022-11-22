import React, { useState } from "react";
import { styles } from './styles';
import { Dimensions, FlatList, View, Text, TouchableOpacity, Image } from 'react-native';

const { width } = Dimensions.get('window')

const CardList = ({ data }) => {
    const [count, setCount] = useState(0)

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>Ecommerce</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={item => String(item)}
                showsHorizontalScrollIndicator={false}
                horizontal renderItem={({ item }) => (
                    <>
                        <View
                            style={{
                                backgroundColor: item.prodCardBack,
                                height: width / 0.85,
                                width: width * 0.55,
                                marginHorizontal: 10,
                                marginTop: 50,
                                borderTopRightRadius: 180,
                                borderTopLeftRadius: 180,
                                borderBottomLeftRadius: 180,
                                borderBottomRightRadius: 180,
                            }}
                        ></View>
                        <View style={styles.imgProdCard}><Text style={styles.imgBackProd}>{item.imgProdCard}</Text></View>
                        <View style={styles.prodCardText}>
                            <Text style={styles.prodCardTextEsp}>Especialidade</Text>
                            <Text style={styles.prodCardTextName}>Nome do Produto</Text>
                            <Text style={styles.prodCardTextValue}>R$ 999,99</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonAddLocation}><Text style={styles.buttonAdd}>+</Text></TouchableOpacity>
                    </>
                )}
            />
            <View style={styles.homeCart} >
                    <Text style={styles.homeCartQt}>02</Text>
                    <Text style={styles.homeCartValue}>R$ 858,52</Text>
                    <Text style={styles.homeCartButton}>-</Text>
            </View>
        </>
    )
}
export default CardList;