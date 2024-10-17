import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale, moderateScale } from "../../styleComponent/Metrices";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginTop: 20,
        textAlign: 'center',
    },
    total: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    paymentMethod: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    completedContainer: {
        padding: 20,
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        alignSelf: 'center',
        margin: 25,
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
    },
    completedText: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
    },
    cartItemsContainer: {
        marginVertical: 10,
    },
    successGif: {
        width: 100,
        height: 100, 
        alignSelf:'center'
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cartItemTitle: {
        fontSize: 16,
    },
    cartItemQuantity: {
        fontSize: 16,
        color: 'gray',
    },
    cartItemTotal: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: moderateScale(20),
        borderRadius: moderateScale(10),
        alignItems: 'center',
        width: '100%',
        maxHeight: '50%',
    },
    modalTitle: {
        marginTop: verticalScale(10),
        textAlign: "center",
        fontSize: moderateScale(18),
        fontWeight: "800",
    },
    modalText: {
        textAlign: "center",
        fontSize: moderateScale(18),
        marginTop: verticalScale(10),
    },
    cancelBtn: {
        textAlign: "center",
        marginTop: verticalScale(20),
        borderColor: "#475AD7",
        borderRadius: moderateScale(5),
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(110),
        borderWidth: moderateScale(1),
    },
    confirmBtn: {
        textAlign: "center",
        marginTop: verticalScale(20),
        backgroundColor: "green",
        borderRadius: moderateScale(5),
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(110),
    },
    cancelBtntext: {
        fontSize: moderateScale(20),
        color: "#475AD7",
        textAlign: "center",
    },
    confirmButtonText: {
        fontSize: moderateScale(20),
        color: "white",
        textAlign: "center",
    },
    uploadIcon: {
        marginTop: verticalScale(10),
    },
});
