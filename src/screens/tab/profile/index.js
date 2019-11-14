/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Container, Left, Right, List, ListItem} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import styles from './style';

const userImage = require('../../../../assets/user.png');

class Profile extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#ffffff', margin: 20}}>
        <ScrollView>
          <View style={styles.headerUser}>
            <Left>
              <Text style={styles.nameUser}>ADIPATI</Text>
              <TouchableOpacity onPress={() => alert('Coming soon.')}>
                <Text>View and edit profile</Text>
              </TouchableOpacity>
            </Left>
            <Right>
              <TouchableOpacity onPress={() => alert('Coming soon.')}>
                <Image source={userImage} style={{height: 100, width: 100}} />
              </TouchableOpacity>
            </Right>
          </View>
          <View>
            <List style={{marginLeft: -19, marginTop: 10}}>
              <TouchableOpacity onPress={() => alert('Coming soon.')}>
                <ListItem>
                  <Left>
                    <Text>Edit Resume</Text>
                  </Left>
                  <Right>
                    <Icon name="file" color="#adadad" size={15} />
                  </Right>
                </ListItem>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Coming soon.')}>
                <ListItem>
                  <Left>
                    <Text>Help Center</Text>
                  </Left>
                  <Right>
                    <Icon name="question-circle" color="#adadad" size={15} />
                  </Right>
                </ListItem>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Coming soon.')}>
                <ListItem>
                  <Left>
                    <Text>Settings</Text>
                  </Left>
                  <Right>
                    <Icon name="cog" color="#adadad" size={15} />
                  </Right>
                </ListItem>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Coming soon.')}>
                <ListItem>
                  <Left>
                    <Text>Terms of Services</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-right" color="#adadad" size={15} />
                  </Right>
                </ListItem>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Coming soon.')}>
                <ListItem>
                  <Left>
                    <Text>Privasi Policy</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-right" color="#adadad" size={15} />
                  </Right>
                </ListItem>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Coming soon.')}>
                <ListItem>
                  <Left>
                    <Text>Give Us Feedbacks</Text>
                  </Left>
                  <Right>
                    <Icon name="comment" color="#adadad" size={15} />
                  </Right>
                </ListItem>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Coming soon.')}>
                <ListItem>
                  <Left>
                    <Text>Log Out</Text>
                  </Left>
                  <Right>
                    <Icon name="sign-out-alt" color="#adadad" size={15} />
                  </Right>
                </ListItem>
              </TouchableOpacity>
            </List>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default Profile;
