import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

class EditProfileInfo extends Component {
    static navigationOptions = {
        title: 'Editar informações'
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <Image style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: 'green' }} source={require('../../imgs/marlonfoto.png')} />
                    <TouchableOpacity
                        onPress={() => { }}

                    >
                        <Text style={{ fontWeight: '700', color: 'blue', fontSize: 18 }}>Mudar foto</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.mainView}>
                    <TextInput
                        style={{ flex: 1, margin: 10, padding: 5, borderBottomWidth: 0.4, borderBottomColor: 'red' }}
                        placeholder='Nome de usuário'
                        onChangeText={() => false}
                        maxLength={50}
                    />
                    <TextInput
                        style={{ flex: 1, margin: 10, padding: 5, borderBottomWidth: 0.4, borderBottomColor: 'red' }}
                        placeholder='Nome civíl'
                        label='Nome civíl'
                        onChangeText={() => false}
                        maxLength={50}
                    />
                    <TextInput
                        style={{ flex: 1, margin: 10, padding: 5, borderBottomWidth: 0.4, borderBottomColor: 'red' }}
                        placeholder='Website'
                        label='Website'
                        onChangeText={() => false}
                        maxLength={50}
                    />
                    <TextInput
                        style={{ flex: 1, margin: 10, padding: 5, borderBottomWidth: 0.4, borderBottomColor: 'red' }}
                        placeholder='Bio'
                        label='Bio'
                        onChangeText={() => false}
                        maxLength={50}
                    />
                </View>

                <View style={styles.footerView}>
                    <Button
                        onPress={() => false}
                        title="Salvar dados"
                        color="green"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },

    headerView: {
        height: 130,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerText: {
        fontSize: 14,
        color: 'black'
    },

    mainView: {
        height: 200,
        width: WIDTH * 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },

    footerView: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default EditProfileInfo;
