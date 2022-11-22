import React from "react";
import { styles } from './styles';
import { Dimensions, FlatList, View } from 'react-native';

const { width } = Dimensions.get('window')

const CardList = ({data}) => {
    return (
        <>
            <FlatList
                data={data}
                keyExtractor={item => String(item)}
                showsHorizontalScrollIndicator={false}
                horizontal renderItem={({ item }) => (
                    <View
                        style={{
                            backgroundColor: item,
                            height: width / 0.9,
                            width: width * 0.6,
                            marginHorizontal: 10,
                            marginTop: 50,
                            borderTopRightRadius: 180,
                            borderTopLeftRadius: 180,
                            borderBottomLeftRadius: 180,
                            borderBottomRightRadius: 180,
                        }}
                    />
                )}
            />
        </>
    )
}
export default CardList;