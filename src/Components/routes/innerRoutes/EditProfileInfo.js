import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class EditProfileInfo extends Component {
    static navigationOptions = {
        title: 'Editar informações'
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>Edite seus dados</Text>
                    <Text style={styles.headerText}>A informação abaixo é o que os outros usuários verão!</Text>
                </View>

                <View style={styles.mainView}>
                    <TextInput
                        style={{ flex: 1, margin: 10, padding: 20, borderBottomWidth: 0.6 }}
                        placeholder='Nome'
                        onChangeText={() => false}
                        maxLength={50}
                    />
                    <TextInput
                        style={{ flex: 8, margin: 10, padding: 20, textAlignVertical: 'top', borderWidth: 0.6 }}
                        multiline={true}
                        numberOfLines={10}
                        placeholder='Diga algo sobre si mesmo em poucas palavras...'
                        onChangeText={() => false}
                        maxLength={300}
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
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerText: {
        fontSize: 14,
        color: 'black'
    },

    mainView: {
        flex: 5,
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    footerView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default EditProfileInfo;
