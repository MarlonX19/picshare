import React, { Component }from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Icon, Card, CardItem, Body, Left, Right, Button, Thumbnail } from 'native-base';



export default class SelfPhotoDetails extends Component {
    static navigationOptions = {
        title: 'Foto',
      }


    render() {
        const photo = this.props.navigation.getParam('photoUrl');
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ScrollView>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../../imgs/marlonfoto.png')}
                                style={{ width: 60, height: 60 }} />
                            <Body>
                                <Text style={{ fontWeight: 'bold', color: 'black' }} >Marlon</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <Image style={{ width: 400, height: 400 }} source={{ uri: photo }} />
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
                </Card>
                </ScrollView>
            </View>
        )
    }

}