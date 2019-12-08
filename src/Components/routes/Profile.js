import React, { Component } from 'react';
import { Text, FlatList, View, ScrollView, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Platform, ActivityIndicator} from 'react-native';
import { Icon, Card, CardItem, Body, Left, Right, Button, Thumbnail, Header } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import firebase from 'firebase';
import RNFetchBlob from  'react-native-fetch-blob';
import base64 from 'base-64';
import _ from 'lodash';


const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob



const options = {
    title: 'Compartilhe momentos',
    takePhotoButtonTitle: 'Tire foto',
    chooseFromLibraryButtonTitle: 'Escolha foto da galeria',

}

const options2 = {
  title: 'Mudar foto de perfil',
  takePhotoButtonTitle: 'Tirar nova foto',
  chooseFromLibraryButtonTitle: 'Escolha nova foto da galeria',

}

class Profile extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props){
        super(props);
    
        this.state = {
          avatarSource: null,
          loadingProfileImg: true,
          data: []
        }
      }

      componentDidMount(){
        //Conecta ao banco de dados e procura as frases no nó de sugestões
        firebase.database().ref('localFoto')  
           .once('value')
           .then(snapshot => {
            
          //Transforma o objeto literal trazido do Banco de Dados em array
           var fotoUrl = _.map(snapshot.val(), 'imageUrl' ); 
           let y = _.size(fotoUrl);   //Verifica o tamanho do array
           this.setState({ data: fotoUrl })
   
           })

      }

      _updateScreen(){
        //Conecta ao banco de dados e procura as frases no nó de sugestões
        firebase.database().ref('localFoto/') 
        .once('value')
        .then(snapshot => {

        //Transforma o objeto literal trazido do Banco de Dados em array
        var fotoUrl = _.map(snapshot.val(), 'imageUrl' );
        this.setState({ data: fotoUrl })
        
        })

      }

      uploadImage(uri, imageName, mime = 'image/jpeg') {
        return new Promise ((resolve, reject) => {
          const uploadUri = Platform.OS === 'ios' ? uri.replace('file//', '') : uri
          let uploadBlob = null
          const imageRef = firebase.storage().ref('image/').child(imageName)
            fs.readFile(uploadUri, 'base64')
              .then((data) => {
                return Blob.build(data, { type: `${mime};BASE64` })
              })
              .then((blob) => {
                uploadBlob = blob
                return imageRef.put(blob, {contentType: mime})
              })
              .then(() => {
                uploadBlob.close()
                return imageRef.getDownloadURL()
              })
              .then((url) => {
                firebase.database().ref('localFoto/').push({
                  imageUrl: url
                });
                this.setState({ loadingProfileImg: true });
                this._updateScreen();
                resolve(url)
              })
              .catch((erro) => {
                reject(erro)
              })
        })
    
      }



      uploadProfilePic(uri, imageName, mime = 'image/jpeg') {
        this.setState({ loadingProfileImg: false })
        return new Promise ((resolve, reject) => {
          const uploadUri = Platform.OS === 'ios' ? uri.replace('file//', '') : uri
          let uploadBlob = null
          const imageRef = firebase.storage().ref('user/images/profile/').child(imageName)
            fs.readFile(uploadUri, 'base64')
              .then((data) => {
                return Blob.build(data, { type: `${mime};BASE64` })
              })
              .then((blob) => {
                uploadBlob = blob
                return imageRef.put(blob, {contentType: mime})
              })
              .then(() => {
                uploadBlob.close()
                return imageRef.getDownloadURL()
              })
              .then((url) => {
                firebase.database().ref('user/images/profile/').push({
                  profileUrl: url
                });
                this.setState({ avatarSource: url });
                this.setState({ loadingProfileImg: true });
                this._updateScreen();
                resolve(url)
              })
              .catch((erro) => {
                reject(erro)
              })
        })
    
      }



      myfun = (param) => {
        
          if(param == 'profile'){
              ImagePicker.showImagePicker(options2, (response) => {
                if (response.didCancel) {
                  console.log('cancelou upload da imagem');
                } else if (response.error) {
                  console.log('ImagePicker Error: ', response.error);
                } else {
                  this.uploadProfilePic(response.path, response.fileName);
                }
            })
            
          } else {
              ImagePicker.showImagePicker(options, (response) => {
                if (response.didCancel) {
                  console.log('cancelou upload da imagem');
                } else if (response.error) {
                  console.log('ImagePicker Error: ', response.error);
                } else {
                  this.uploadImage(response.path, response.fileName);
                }
            }) 
          }  
      }


    _loadingProfileImg() {
        if(this.state.loadingProfileImg){
          return (
            <View>
              <TouchableOpacity
                onPress={() => this.myfun('profile')}
              >
                <Image source={{ uri: this.state.avatarSource }} style={{width: 105, height: 105, borderRadius: 40}} />
              </TouchableOpacity>
            </View>
          )
        } else {
          return ( <ActivityIndicator size="large" color="red" /> )
        }
    }

    render() {
        return(
            <ScrollView style={styles.container}>
              <Header style={{backgroundColor: 'transparent'}}>
                  <Left>
                      <TouchableOpacity
                        onPress={() => this.myfun()}
                      >
                        <Icon name="md-camera"></Icon>
                      </TouchableOpacity>
                    </Left>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{fontSize: 21, fontWeight: 'bold'}}>PicShare</Text>
                    </View>
                  <Right>
                      <TouchableOpacity
                        onPress={() => false}
                      >
                        <Icon name="md-search"></Icon>
                      </TouchableOpacity>
                   </Right>
              </Header>
                <Card>
                    <CardItem>
                        <Left>
                            {this._loadingProfileImg()}
                        </Left>
                        <Body>
                            <Text style={{marginBottom: 5, color: 'black', fontWeight: 'bold', fontSize: 18}}>Marlon Englemam</Text>
                            <Text note>Aqui aparece a bio do usuário, imagine uma frase da hora aqui</Text>
                        </Body>
                    </CardItem>
                    <CardItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Button transparent>
                           <Text> 201 Seguidores</Text>
                        </Button>
                        <Button transparent>
                           <Text> 150 Seguindo</Text>
                        </Button>
                        <TouchableOpacity
                         onPress={() => false}
                         
                        >
                           <Text> 22 Posts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                         onPress={() => this.props.navigation.navigate('EditProfileInfo')}
                         
                        >
                           <Text>Editar</Text>
                        </TouchableOpacity>
                    </CardItem>
                </Card>
                <FlatList
                    style={{flexDirection: 'row'}}
                    inverted
                    data={this.state.data}
                    keyExtractor={item => item.imageUrl}
                    numColumns={3} // Número de colunas
                    renderItem={( {item} ) => {
                        return (
                        <View style={styles.item}>
                           
                            <TouchableWithoutFeedback
                                onPress={() =>  this.props.navigation.navigate('SelfPhotoDetails', {
                                  photoUrl: item
                                }) }
                            >
                                <Image source={ {uri: item} }
                                 style={{width: 137, height: 120}} />
                            </TouchableWithoutFeedback>
                        </View>
                        );
                    }}
                    />
            </ScrollView>
        )
    }
}

export default Profile;

const styles = StyleSheet.create({
    item: {
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: "#dcda48",  
      margin: 2,
      padding: 0,
      width: 137,
      height: 120
    },
    text: {
      color: "#333333"
    }
  });
