import React, { Component } from 'react';
import { Platform, View, StyleSheet, Button} from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Icon } from 'native-base';


class ListRecents extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            
            <Icon name="md-heart" style={{ color: tintColor }} />
         
        )
    }

    render() {
        return(
            <Container style={{height: 95}}>
               <Content>
                   <List>
                       <ListItem>
                           <Thumbnail circle size={60} source={require('../imgs/donnie.jpg')}/>
                           <Text style={styles.text}>  Donnie liked your pic </Text>
                           <Icon name="md-heart" style={{color: "red", marginLeft: 135}}></Icon>
                       </ListItem>
                   </List>
               </Content>
            </Container>
        )
    }
}

export default ListRecents;


const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flex: 11
    },

    text: {
        fontSize: 15,
        fontWeight: 'bold',
    }
});

