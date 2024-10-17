import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { horizontalScale, verticalScale, moderateScale } from "../../styleComponent/Metrices";

export const style = StyleSheet.create({
  inputField: {
    width: '100%',
    backgroundColor: '#f3f4f6',
    marginBottom: verticalScale(15),
  },
  AddressinputField: {
    width: '100%',
    backgroundColor: '#f3f4f6',
    marginTop: verticalScale(15),
  },
  title: {
    fontSize: 35,
    color: 'red',
    textAlign: 'center',
    textDecorationLine: 'underline',
    padding: 8,
    fontWeight: 'bold',
    marginTop: 35
  },
  contentStyle: {
    height: moderateScale(36),
    textAlignVertical: 'center',
  },
  SignUpBtn: {
    backgroundColor: '#475AD7',
    paddingVertical: verticalScale(12),
    marginTop: verticalScale(30),
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(5),
  },
  SignUpBtnText: {
    color: '#fff',
    fontSize: moderateScale(20),
    textAlign: 'center',
  },
  Heading: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    color: 'white'
  },
  Textshow: {
    padding: 8,
    backgroundColor: 'indianred',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    borderRadius: 30,
    width: 350,
  },
})