/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {
  Container,
  H2,
  Button,
  Header,
  Left,
  Body,
  Right,
  Item,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';

class Register extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#f0f0f0'}}>
        <ScrollView>
          <Header transparent>
            <Left>
              <Button transparent>
                <Icon
                  name="arrow-left"
                  color="#4a4848"
                  size={25}
                  onPress={() => this.props.navigation.goBack()}
                />
              </Button>
            </Left>
            <Body />
            <Right />
          </Header>
          <View style={{marginLeft: 25, marginRight: 25}}>
            <View>
              <H2 style={styles.txtHeader}>Sign up</H2>
            </View>
            <View style={styles.viewSosmed}>
              <Button
                iconLeft
                primary
                style={styles.btnLogSosMed}
                rounded
                onPress={() => alert('Coming soon.')}>
                <Icon name="facebook-f" color="#ffffff" size={20} />
                <Text style={styles.txtLogSosMed}>Facebook</Text>
              </Button>
              <View style={{marginLeft: 10}} />
              <Button
                iconRight
                danger
                style={styles.btnLogSosMed}
                rounded
                onPress={() => alert('Coming soon.')}>
                <Icon name="google" color="#ffffff" size={20} />
                <Text style={styles.txtLogSosMed}>Google</Text>
              </Button>
            </View>
            <View>
              <Text style={styles.txtOr}>Or sign up with </Text>
            </View>
            <View>
              <Item style={styles.inpLogin} rounded>
                <TextInput style={styles.txtInput} placeholder="Name" />
              </Item>
              <View style={{marginBottom: 10}} />
              <Item style={styles.inpLogin} rounded>
                <TextInput style={styles.txtInput} placeholder="Email" />
              </Item>
              <View style={{marginBottom: 10}} />
              <Item style={styles.inpLogin} rounded>
                <TextInput
                  secureTextEntry={true}
                  style={styles.txtInput}
                  placeholder="Password"
                />
              </Item>
            </View>
            <View>
              <Button
                style={styles.btnLogin}
                onPress={() => this.props.navigation.navigate('MenuTabs')}
                rounded
                block>
                <Text style={styles.txtLogin}>Sign up</Text>
              </Button>
            </View>
            <View>
              <Text style={styles.txtForgot}>
                By signing up, you agreed with our Terms of Services Privacy
                Policy
              </Text>
            </View>
            <View>
              <Text style={styles.linkSignup}>
                Already Have account ?
                <Text
                  style={styles.txtSignup}
                  onPress={() => this.props.navigation.navigate('Login')}>
                  {' '}
                  Log in
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default Register;
