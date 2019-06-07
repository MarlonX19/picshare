import React, { Component } from 'react';
import { Text, Platform, View, StyleSheet, Button, Image} from 'react-native';
import { Icon, Container, Content } from 'native-base';
import firebase from 'firebase';
import _ from 'lodash';

import CardComponent from './CardComponent';

class MainScreen extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          data: null
        }
      }

      componentWillMount(){

        //Conecta ao banco de dados e procura as fotos no nó de sugestões
        firebase.database().ref('localFoto')  
           .once('value')
           .then(snapshot => {
            
            //Transforma o objeto literal trazido do Banco de Dados em array
           var fotoUrl = _.map(snapshot.val(), 'imageUrl' ); 
           let y = _.size(fotoUrl);   //Verifica o tamanho do array
           this.setState({ data: fotoUrl })
           
           })

      }


    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            
            <Icon name="md-hand" style={{ color: tintColor }} />
         
        )
    }

    render() {
        return(
            <View style={{flex: 1}}>
            <View style={styles.header}>
                <Text 
                    style={{ alignSelf: 'center', fontWeight: 'bold', color: 'black', fontSize: 26}}
                >
                Explore
                </Text>
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

export default MainScreen;

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

