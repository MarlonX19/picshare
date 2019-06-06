import React, { Component }from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Icon, Card, CardItem, Body, Left, Right, Button, Thumbnail } from 'native-base';



export default class SelfPhotoDetails extends Component {
    static navigationOptions = {
        title: 'Foto',
      }

    constructor(props){
        super(props)

        this.state = {
            imageUrl: ''
        }
    }

    componentDidMount() {
        this.setState({ imageUrl: this.props.navigation.getParam('photoUrl') })
        console.log(this.props.photoUrl)
    }

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ScrollView>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../imgs/marlonfoto.png')}
                                style={{ width: 60, height: 60 }} />
                            <Body>
                                <Text style={{ fontWeight: 'bold', color: 'black' }} >Marlon</Text>
                                <Text note>{this.state.date}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <Image style={{ width: 400, height: 400 }} source={{ uri: this.state.imageUrl }} />
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