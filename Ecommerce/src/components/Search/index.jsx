import React, { useEffect, useState } from "react";
import { styles } from './styles';
import { View, TextInput } from 'react-native';

const SearchList = () => {
    const [data, setData] = useState([])
    const [originData, setOriginData] = useState([])

    useEffect(() => {
        setData(data);
        setOriginData(data);
    }, [])


    function search(s) {
        let dataList = data.parse(data.stringify(originData))
        setData(dataList.filter((d) => d.prodTitle.includes(s) || d.description.includes(s)));
    }


    return (
        <>
            <View style={styles.search}>
                <TextInput style={styles.searchText} placeholder={'pesquise aqui ...'} onChangeText={(s) => search()}></TextInput>
            </View>
        </>
    )
}
export default SearchList;