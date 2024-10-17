import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { style } from './LoginStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { TextInput } from 'react-native-paper';
import { LoginValidation } from './LoginValidation';

export default function Login() {
  
  const navigation = useNavigation();
  useEffect(() => {
    const data = navigation.addListener("focus", () => {
      getData()
    });
    return data;
  }, [navigation]);

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const clearError = (field) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value != null) {
        const obj = JSON.parse(value)
        setEmail(obj.Email)
        setPassword(obj.Password)
      } else {
        setEmail("")
        setPassword("")
      }
    } catch (e) {
      console.log(e)
    }
  };

  LoginCheck = () => {
    const validationErrors = LoginValidation(LoginEmail, LoginPassword, Email, Password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (Email === LoginEmail && LoginPassword === Password) {
      navigation.navigate('HomeScreen')
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const [LoginEmail, setLoginEmail] = useState("")
  const [LoginPassword, setLoginPassword] = useState("")
  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 15 }}>
      <Text style={style.title}>LOGIN</Text>
      <Image source={{ uri: "https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454" }} style={{ height: 100, width: 100, borderRadius: 100, alignSelf: 'center', marginBottom: 20 }} />
      <TextInput
        left={
          <TextInput.Icon
            icon={() => (
              <Fontisto name="email" size={24} color="black" />
            )}
          />
        }
        label={"Email"}
        mode="outlined"
        style={style.inputField}
        value={LoginEmail}
        onChangeText={setLoginEmail}
        onFocus={() => {
          clearError('LoginEmail');
          clearError('Emailerror');
        }}
        cursorColor={"#475AD7"}
        outlineColor={errors.name ? "red" : "transparent"}
        outlineStyle={{ borderRadius: 10 }}
        contentStyle={style.contentStyle}
      />
      {errors.LoginEmail && <Text style={{ color: 'red' }}>{errors.LoginEmail}</Text>}
      <TextInput
        left={
          <TextInput.Icon
            icon={() => (
              <MaterialIcons name="password" size={24} color="black" />
            )}
          />
        }
        label={"Password"}
        secureTextEntry={!isPasswordVisible}
        mode="outlined"
        style={style.inputField}
        value={LoginPassword}
        onChangeText={setLoginPassword}
        onFocus={() => {
          clearError('LoginPassword');
          clearError('Emailerror');
        }}
        cursorColor={"#475AD7"}
        outlineColor={errors.name ? "red" : "transparent"}
        outlineStyle={{ borderRadius: 10 }}
        contentStyle={style.contentStyle}
        right={
          <TextInput.Icon
            icon={isPasswordVisible ? "eye-off" : "eye"}
            onPress={togglePasswordVisibility}
            accessibilityLabel={isPasswordVisible ? "Hide password" : "Show password"}
          />
        }
      />
      {errors.LoginPassword && <Text style={{ color: 'red' }}>{errors.LoginPassword}</Text>}
      {errors.Emailerror && <Text style={{ color: 'red' }}>{errors.Emailerror}</Text>}
      <TouchableOpacity
        activeOpacity={0.9}
        style={style.SignUpBtn}
        onPress={LoginCheck}
      >
        <Text style={style.SignUpBtnText}>Login</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 55, marginBottom: 25, alignSelf: 'center' }}>
        <Text style={{ fontWeight: 'bold', color: 'black' }}>Don't Have Account?</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={{ fontWeight: 'bold', color: 'red' }}>  Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}