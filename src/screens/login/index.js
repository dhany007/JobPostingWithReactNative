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

class Login extends Component {
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
              <H2 style={styles.txtHeader}>Log in</H2>
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
              <Text style={styles.txtOr}>Or log in with </Text>
            </View>
            <View>
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
              <Text style={styles.txtForgot}>Forgot your password ? </Text>
            </View>
            <View>
              <Button
                style={styles.btnLogin}
                onPress={() => this.props.navigation.navigate('MenuTabs')}
                rounded
                block>
                <Text style={styles.txtLogin}>Log in</Text>
              </Button>
            </View>
            <View>
              <Text style={styles.linkSignup}>
                Dont't Have an account ?
                <Text
                  style={styles.txtSignup}
                  onPress={() => this.props.navigation.navigate('Register')}>
                  {' '}
                  Sign Up
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default Login;
