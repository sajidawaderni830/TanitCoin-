import React from 'react';
import {
    Text, View, Image, TextInput, TouchableOpacity,
    Dimensions, Platform, StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';




const Register = ({ navigation }) => {
    const [data, setData] = React.useState({
        Nom: '',
        password: '',
        prénom: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });
    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }


    return (
        <View style={{ backgroundColor: "#FFF", height: "100%" }}>
            <Image source={require('../assets/logosoway.png')}
                style={{ width: 100, height: 100, alignSelf: 'center' }}
            />
            <Text
                style={{
                    fontSize: 15,
                    fontFamily: "SemiBold",
                    alignSelf: "center",
                }}
            >Mon réseau social révolutionnaire</Text>

            <Text
                style={{
                    fontFamily: "SemiBold",
                    marginHorizontal: 55,
                    textAlign: 'center',
                    marginTop: 5,
                    opacity: 0.4, color: "#00716F"
                }}
            >
                Inscription 2 en 1
            </Text>
            <Text
                style={{
                    fontFamily: "SemiBold",
                    marginHorizontal: 55,
                    textAlign: 'center',
                    marginTop: 5,
                    opacity: 0.4, color: "#00716F"
                }}
            >
                Votre profil personnel et votre compte TanitCoin
            </Text>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 10,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2
            }}>

                <TextInput
                    placeholder="Nom"
                    placeholderTextColor="#00716F"
                    style={{ paddingHorizontal: 10 }}
                    onChangeText={(val) => textInputChange(val)}

                />




            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 10,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2
            }}>

                <TextInput
                    placeholder="prénom"
                    placeholderTextColor="#00716F"
                    style={{ paddingHorizontal: 10 }}
                    onChangeText={(val) => textInputChange(val)}
                />




            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 10,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2
            }}>

                <TextInput
                    placeholder="Adress"
                    placeholderTextColor="#00716F"
                    style={{ paddingHorizontal: 10 }}
                    onChangeText={(val) => textInputChange(val)}
                />
            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 10,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2
            }}>

                <TextInput
                    placeholder="langue"
                    placeholderTextColor="#00716F"
                    style={{ paddingHorizontal: 10 }}
                    onChangeText={(val) => textInputChange(val)}
                />








            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 10,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2
            }}>

                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#00716F"
                    style={{ paddingHorizontal: 10 }}
                    onChangeText={(val) => handlePasswordChange(val)}
                />




            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2
            }}>

                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#00716F"
                    style={{ paddingHorizontal: 10 }}
                />




            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2
            }}>

                <TextInput
                    secureTextEntry
                    placeholder="Confirm Password"
                    placeholderTextColor="#00716F"
                    style={{ paddingHorizontal: 10 }}
                />


            </View>

            <View style={{
                marginHorizontal: 55,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
                backgroundColor: "#00716F",
                paddingVertical: 10,
                borderRadius: 23
            }}>
                <Text
                    onPress={() => navigation.goBack()}
                    style={{
                        color: "white",
                        fontFamily: "SemiBold"
                    }}>Register</Text>
            </View>

        </View>
    )
}
export default Register;
