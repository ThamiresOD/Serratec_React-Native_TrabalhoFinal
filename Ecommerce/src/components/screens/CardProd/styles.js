import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    imgBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
        height: '100%',
    },

    header: {
        marginStart: '2%',
        marginBottom: '5%',
    },

    headerText: {
        fontSize: 35,
        color: "#F0F4F2",
    },

    imgBackCardProd: {
        backgroundColor: '#153033',
        borderRadius: 200,
        padding: '6%',
        height: '45%',
    },

    imgCardProd: {
        borderRadius: 200,
        width: '100%',
        height: '100%',
    },

    prodCardText: {
        marginStart: '4%',
        width: '75%',
        padding: '2%',
    },

    prodCardStartIcon: {
        color: "#F0F4F2",
        fontSize: 15,
        marginStart: '5%',
    },

    prodCardTextQt: {
        color: "#F0F4F2",
        fontSize: 20,
    },

    prodCardTextEsp: {
        color: "#F0F4F2",
        fontSize: 20,
    },

    prodCardTextDescri: {
        color: "#F0F4F2",
        fontSize: 15,
        marginTop: '5%',
        marginStart: '5%',
    },

    prodCardTextValue: {
        fontSize: 20,
        textDecorationLine: 'bold',
        color: "#F0F4F2",
        marginTop: '5%',
        fontWeight: "bold",
    },

    areaEdit: {
        flexDirection: 'row',
        width: '80%',
        marginTop: '5%',
        flexWrap: 'wrap',
    },

    prodEdit: {
        flexDirection: 'row',
        color: "#071217",
        backgroundColor: '#6FC7A7',
        borderRadius: 200,
        marginStart: '5%',
        padding: '3%',
        justifyContent: 'center',
    },

    prodEditText: {
        fontSize: 25,
        color: "#071217",
    },

});