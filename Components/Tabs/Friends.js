import React, { Component } from 'react';
import { Text, Platform, View, StyleSheet, Button} from 'react-native';
import { Icon, Container, Content } from 'native-base';

import CardComponent from '../CardComponent';

class Friends extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            
            <Icon name="md-people" style={{ color: tintColor }} />
         
        )
    }

    render() {
        return(
            <View style={{flex: 1}}>
            <View style={styles.header}>
                <Text style={{fontWeight: 'bold', color: 'black', fontSize: 26}}>PicShare - Amigos</Text>
            </View>
            <Container style={styles.container}>
                <Content>
                    <CardComponent />
                </Content>
            </Container>
            </View>
        )
    }
}

export default Friends;


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

