import React, { Component } from 'react';
import { Text, Platform, View, StyleSheet, Image, Alert, FlatList, TouchableWithoutFeedback} from 'react-native';
import { Icon, Card, CardItem, Body, Left, Right, Button, Thumbnail } from 'native-base';
import firebase from 'firebase';
import _ from 'lodash';


class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          //default value of the date time
          date: '',
          data: null
        }

        //Conecta ao banco de dados e procura as fotos no nó de sugestões
        firebase.database().ref('localFoto')  
        .once('value')
        .then(snapshot => {

        //Transforma o objeto literal trazido do Banco de Dados em array
        var fotoUrl = _.map(snapshot.val(), 'imageUrl' )
        let y = _.size(fotoUrl);     //Verifica o tamanho do array
        this.setState({ data: fotoUrl })
        
        })

      }

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            
            <Icon name="md-hand" style={{ color: tintColor }} />
         
        )
    }

    componentDidMount() {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        this.setState({
          //Setting the value of the date time
          date:
            date + '/' + month + '/' + year + ' ' + hours + ':' + min
        });
      }

    render() {
        return(
            <View style={{ flex: 1, backgroundColor: 'lightgrey' }}>
                <Card>
                    <CardItem cardBody>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={item => item}
                            numColumns={1} // Número de colunas
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.item}>
                                        <CardItem>
                                            <Left>
                                                <Thumbnail source={require('./imgs/marlonfoto.png')}
                                                    style={{ width: 60, height: 60 }} />
                                                <Body>
                                                    <Text style={{ fontWeight: 'bold', color: 'black' }} >Marlon</Text>
                                                    <Text note>{this.state.date}</Text>
                                                </Body>
                                            </Left>
                                        </CardItem>
                                        <Image source={{ uri: item }}
                                            style={{ width: null, height: 400 }} />
                                        <CardItem style={{ height: 40 }}>
                                            <Left>
                                                <Button transparent>
                                                    <Icon name="ios-heart" style={{ color: 'black' }} />
                                                </Button>
                                                <Button transparent>
                                                    <Icon name="ios-chatbubbles" style={{ color: 'black' }} />
                                                </Button>
                                                <Button transparent>
                                                    <Icon name="ios-send" style={{ color: 'black' }} />
                                                </Button>
                                            </Left>
                                        </CardItem>
                                        <CardItem style={{ height: 20 }}>
                                            <Text>{Math.floor((Math.random() * 300) + 20)} likes</Text>
                                        </CardItem>
                                    </View>
                                );
                            }}
                        />
                    </CardItem>
                </Card>
            </View>
        )
    }
}

export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    item: {
        marginBottom: 15
    }
});

