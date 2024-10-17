import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import { style } from './SignupStyle';
import { RadioButton, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5, Fontisto, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SignupValidation } from './SignupValidation';

const successIcon = require("../../assets/icon-success.png")

export default function Signup() {
    const navigation = useNavigation();
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Address, setAddress] = useState("");
    const [Mobile, setMobile] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    const [errors, setErrors] = useState({});
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [visible, setVisible] = useState(false);

    const clearError = (field) => {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
    };

    const storeData = async () => {
        const validationErrors = SignupValidation(Name, Email, Password, Address, Mobile, selectedValue);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            const value = {
                Name,
                Email,
                Password,
                Address,
                Mobile,
                Gender: selectedValue,
            };
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('user', jsonValue);
            console.log("Data Stored Successfully!!");
            console.log(jsonValue);
            setVisible(true)
            setAddress('')
            setName('')
            setMobile('')
            setEmail('')
            setPassword('')
            setSelectedValue('')
        } catch (e) {
            console.log(e);
        }
    };

    const onCloseModal = () => {
        setVisible(false);
        navigation.navigate("Login");
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
      };

    return (
        <View style={style.HeadingContainer}>
            <Text style={style.title}>Sign Up</Text>
            <TextInput
                left={
                    <TextInput.Icon
                        icon={() => (
                            <FontAwesome5 name="user-circle" size={24} color="black" />
                        )}
                    />
                }
                label={"Name"}
                mode="outlined"
                style={style.inputField}
                value={Name}
                onChangeText={setName}
                onFocus={() => clearError('name')}
                cursorColor={"#475AD7"}
                outlineColor={errors.name ? "red" : "transparent"}
                outlineStyle={{ borderRadius: 10 }}
                contentStyle={style.contentStyle}
            />
            {errors.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}
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
                value={Email}
                onChangeText={setEmail}
                onFocus={() => clearError('email')}
                cursorColor={"#475AD7"}
                outlineColor={errors.email ? "red" : "transparent"}
                outlineStyle={{ borderRadius: 10 }}
                contentStyle={style.contentStyle}
            />
            {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
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
                value={Password}
                onChangeText={setPassword}
                onFocus={() => clearError('password')}
                cursorColor={"#475AD7"}
                outlineColor={errors.password ? "red" : "transparent"}
                outlineStyle={{ borderRadius: 10 }}
                contentStyle={style.contentStyle}

                maxLength={12}
                right={
                    <TextInput.Icon
                      icon={isPasswordVisible ? "eye-off" : "eye"}
                      onPress={togglePasswordVisibility}
                      accessibilityLabel={isPasswordVisible ? "Hide password" : "Show password"}
                    />
                  }
            />
            {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
            <TextInput
                label={"Mobile Number"}
                mode="outlined"
                style={style.inputField}
                value={Mobile}
                onChangeText={setMobile}
                onFocus={() => clearError('mobile')}
                cursorColor={"#475AD7"}
                outlineColor={errors.mobile ? "red" : "transparent"}
                outlineStyle={{ borderRadius: 10 }}
                keyboardType="numeric"
                maxLength={10}
            />
            {errors.mobile && <Text style={{ color: 'red' }}>{errors.mobile}</Text>}
            <View>
                <RadioButton.Group
                    onValueChange={(value) => {
                        setSelectedValue(value);
                        clearError('selectedValue');
                    }}
                    value={selectedValue}
                >
                    <View style={style.radiocontianer}>
                        <Text style={style.radioOption}>Gender: </Text>
                        <View style={style.radiocontianer}>
                            <RadioButton value="Male" color="blue" />
                            <Text style={style.radioText}>Male</Text>
                        </View>
                        <View style={style.radiocontianer}>
                            <RadioButton value="Female" color="red" />
                            <Text style={style.radioText}>Female</Text>
                        </View>
                    </View>
                </RadioButton.Group>
                {errors.selectedValue && <Text style={{ color: 'red' }}>{errors.selectedValue}</Text>}
            </View>
            <TextInput
                left={
                    <TextInput.Icon
                        icon={() => (
                            <SimpleLineIcons name="location-pin" size={20} color="black" />
                        )}
                    />
                }
                label={"Address"}
                value={Address}
                onChangeText={setAddress}
                onFocus={() => clearError('address')}
                mode="outlined"
                style={style.AddressinputField}
                cursorColor={"#475AD7"}
                outlineColor={errors.address ? "red" : "transparent"}
                outlineStyle={{ borderRadius: 10 }}
                contentStyle={style.contentStyle}
            />
            {errors.address && <Text style={{ color: 'red' }}>{errors.address}</Text>}
            <TouchableOpacity
                activeOpacity={0.9}
                style={style.SignUpBtn}
                onPress={storeData}
            >
                <Text style={style.SignUpBtnText}>Register</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 55, marginBottom: 25, alignSelf: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: 'black' }}>Do you have an account?</Text>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{ fontWeight: 'bold', color: 'red' }}> Login</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(false)}
            >
                <View style={style.container}>
                    <View style={style.alertBox}>
                        <Image source={successIcon} />
                        <Text style={style.titleModal}>Success!</Text>
                        <Text style={style.message}>Your account has been created successfully.</Text>
                        <TouchableOpacity style={style.button} onPress={onCloseModal}>
                            <Text style={style.buttonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
