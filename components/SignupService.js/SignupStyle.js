import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { horizontalScale, verticalScale, moderateScale } from "../../styleComponent/Metrices";

export const style = StyleSheet.create({
  HeadingContainer:{
    flex: 1, 
    backgroundColor: 'white', 
    paddingHorizontal: 15
  },
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  containerClose: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: moderateScale(20),
  },
  alertBox: {
    backgroundColor: '#fff',
    borderRadius: moderateScale(10),
    padding: moderateScale(20),
    alignItems: 'center',
    elevation: 5,
  },
  titleModal: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
    color: 'green'
  },
  titleclose: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
    color: 'red'
  },
  message: {
    fontSize: moderateScale(18),
    marginBottom: verticalScale(20),
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
    borderRadius: moderateScale(5),
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  radiocontianer:{
    flexDirection: 'row', 
    alignItems: 'center'
  },
  radioOption:{
fontSize: 20, 
fontWeight: 'bold', 
color: 'black'
  },
  radioText:{
    fontSize: 15, 
    fontWeight: 'bold', 
    color: 'black'
      }

})