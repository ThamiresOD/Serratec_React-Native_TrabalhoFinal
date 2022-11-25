import { StyleSheet, Dimensions } from 'react-native';

// const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    
    // prodCardBack: {
    //     // backgroundColor: item, //Passar o item em si por props??
    //     height: width / 0.85,
    //     width: width * 0.59,
    //     marginHorizontal: 10,
    //     marginTop: 50,
    //     borderTopRightRadius: 180,
    //     borderTopLeftRadius: 180,
    //     borderBottomLeftRadius: 180,
    //     borderBottomRightRadius: 180,
    // },

    header: {
        marginTop: '10%',
        marginStart: '10%',
    },
    
    headerText: {
        fontSize: 35,
        color: "#F0F4F2",
    },
    
    // search: {
    //     color: "#F0F4F2",
    //     backgroundColor: '#F0F4F2',
    //     borderRadius: 200,
    //     marginTop: '5%',
    //     marginStart: '5%',
    //     marginEnd: '10%',
    // },
    
    // searchText: {
    //     fontSize: 25,
    //     color: "#F0F4F2",
    //     marginStart: '5%',
    // },

    imgProdCard: {
        position: 'absolute',
        marginTop: '40%',
        marginStart: '12%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#071217',
        width: '75%',
        height: '32%',
        borderRadius: 200,
        padding: '5%',
    },
    
    imgProd: {
        position: 'absolute',
        marginTop: '40%',
        borderRadius: 200,
        width: '100%',
        height: '100%',
    },
    
    prodCardText: {
        position: 'absolute',
        marginTop: '135%',
        marginStart: '15%',
        width: '65%',
        padding: '5%',
        height: '3%',
        justifyContent: "center",         
    },
    
    prodCardTextEsp: {
        color: "#071217",
        fontSize: 20,
    },

    prodCardTextName: {
        color: "#F0F4F2",
        fontSize: 25,
        marginTop: '10%',
    },
    
    prodCardTextValue: {
        fontSize: 20,
        textDecorationLine: 'bold',
        color: "#071217",
        marginTop: '10%',
        fontWeight: "bold",
    },
    
    
    buttonAddLocation: {
        position: 'absolute',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F0F4F2',  
        color: "#F0F4F2",
        width: '6%',
        borderRadius: 200,
        marginTop: '165%',
        marginStart: '60%',
        marginEnd: '10%',
    },
    
    buttonAdd: {
        fontSize: 30,
        color: "#071217",
    },
    
    homeCart: {
        flexDirection:'row',
        color: "#071217",
        backgroundColor: '#6FC7A7',  
        borderRadius: 200,
        padding: '2%',
        marginStart: '8%',
        marginEnd: '8%',
        marginBottom: '10%',
        alignItems: "center",
    },
    
    homeCartQt: {
        fontSize: 30,
        color: "#071217",
        marginStart: '5%',
        fontWeight: "bold",
    },
    
    homeCartValue: {
        fontSize: 25,
        color: "#071217",
        marginStart: '10%',
    },
    
    homeCartButton: {
        fontSize: 30,
        color: "#071217",
        marginStart: '30%',
    },
});
