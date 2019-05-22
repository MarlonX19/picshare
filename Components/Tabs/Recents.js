import React, { Component } from 'react';
import { Text, Platform, ScrollView, View, StyleSheet, Button} from 'react-native';
import { Icon, Container, Content, Title, Header } from 'native-base';

import ListRecents from '../ListRecents';

class Recents extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            
            <Icon name="md-heart" style={{ color: tintColor }} />
         
        )
    }

    render() {
        return(
            <View>
                <Header style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                    <Title style={{fontWeight: 'bold', color: 'black', fontSize: 26}}>Recente</Title>
                </Header>
                <ScrollView >
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                    <ListRecents />
                </ScrollView>
            </View>
        )
    }
}

export default Recents;


const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flex: 11
    },

    header: {
        flex: 1,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

