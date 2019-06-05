import React, { Component }from 'react';
import { Text, View, Image } from 'react-native';



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
                <Image style={{ width: 400, height: 400 }} source={{uri: this.state.imageUrl }} />
            </View>
        )
    }

}