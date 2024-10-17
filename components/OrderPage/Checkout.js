import React, { useState,useEffect } from 'react';
import { View, Text, Button, Animated, Easing, ScrollView, Modal, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './CheckoutStyle';
import { useDispatch } from 'react-redux';
import { useNavigation } from "@react-navigation/native";

const successIcon = require("../../assets/icon-success.png");
const successGif = require("../../assets/confirm.gif");

export default function Checkout() {
    const dispatch = useDispatch();
    const [orderCompleted, setOrderCompleted] = useState(false);
    const [animationValue] = useState(new Animated.Value(0));
    const Cart = useSelector((state) => state.AddToCart.Cart);
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigation();

    const handleConfirm = () => {
        setShowModal(true);
    };

    const handleCheckout = () => {
        setShowModal(false);
        setOrderCompleted(true);
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start();
    };

    const animationStyle = {
        opacity: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        }),
        transform: [
            {
                scale: animationValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.5],
                }),
            },
        ],
    };

    const result = {};
    Cart.forEach(product => {
        if (result[product.id]) {
            result[product.id].quantity += 1;
        } else {
            result[product.id] = { ...product, quantity: 1 };
        }
    });

    const finalArray = Object.values(result).map(product => ({
        ...product,
        totalPrice: product.price * product.quantity,
    }));

    const totalAmount = finalArray.reduce((sum, product) => sum + product.totalPrice, 0);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Checkout</Text>
                <View style={styles.cartItemsContainer}>
                    {finalArray.map((item) => (
                        <View key={item.id} style={styles.cartItem}>
                            <Text style={styles.cartItemTitle}>{item.title}</Text>
                            <View style={styles.cartItemDetails}>
                                <Text style={styles.cartItemPrice}>Price: &#8377;{item.price}</Text>
                                <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
                                <Text style={styles.cartItemTotal}>Total: &#8377;{item.totalPrice}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <Text style={styles.total}>Total Amount: &#8377;{totalAmount.toFixed(2)}</Text>
                <Text style={styles.paymentMethod}>Payment Method: Cash on Delivery</Text>
                <Button title="Confirm Order" onPress={handleConfirm} />
                {orderCompleted && (
                    <>
                        <View style={styles.centeredContainer}>
                            <Animated.View style={[styles.completedContainer, animationStyle]}>
                                <Image source={successGif} style={styles.successGif} />
                                <Text style={styles.completedText}>Order Completed!</Text>
                            </Animated.View>
                        </View>
                    </>
                )}
                <Modal visible={showModal} transparent={true} animationType="slide">
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Image source={successIcon} style={styles.uploadIcon} />
                            <Text style={styles.modalTitle}>Confirmation</Text>
                            <Text style={styles.modalText}>Are you sure you want to confirm this Items?</Text>

                            <TouchableOpacity style={styles.confirmBtn} onPress={handleCheckout}>
                                <Text style={styles.confirmButtonText}>Done</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cancelBtn} onPress={() => setShowModal(false)}>
                                <Text style={styles.cancelBtntext}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    );
}
