import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Login extends React.Component {

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{
                backgroundColor: "#FFF", height: "100%",

            }}>
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
                        opacity: 0.4,
                        color: "#00716F"
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
                        opacity: 0.4,
                        color: "#00716F"
                    }}
                >
                    Votre profil personnel et votre compte TanitCoin
                </Text>


                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 50,
                    paddingHorizontal: 10,
                    borderColor: "#00716F",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    <Icon name="mail" color="#00716F" size={24} />
                    <TextInput
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
                    <Icon name="mail" color="#00716F" size={24} />
                    <TextInput
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
                        onPress={() => navigate('StripeApp')}
                        style={{
                            color: "white",
                            fontFamily: "SemiBold"
                        }}>Already a member</Text>
                </View>
                <Text

                    onPress={() => navigate('Register')}

                    style={{
                        alignSelf: "center",
                        color: "#00716F",
                        fontFamily: "SemiBold",
                        paddingVertical: 30
                    }}>New User</Text>
            </View>
        )
    }
}