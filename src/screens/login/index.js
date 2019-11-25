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

import {connect} from 'react-redux';
import {loginUser} from '../../redux/action/user';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      success: false,
      message: '',
    };
  }

  loginUser = async () => {
    const email = this.state.email;
    console.log(this.email);
    const password = this.state.password;
    console.log(this.password);
    const data = {
      email,
      password,
    };
    await this.props
      .dispatch(loginUser(data))
      .then(res => {
        console.log(res);
        this.setState = {
          success: this.props.user.data.success,
          message: this.props.user.data.message,
        };
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props.user.data);
    console.log(this.state.email);
    console.log(this.state.password);
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
                <TextInput
                  style={styles.txtInput}
                  placeholder="Enter email"
                  onChangeText={email => this.setState({email})}
                />
              </Item>
              <View style={{marginBottom: 10}} />
              <Item style={styles.inpLogin} rounded>
                <TextInput
                  secureTextEntry={true}
                  style={styles.txtInput}
                  placeholder="Password"
                  onChangeText={password => this.setState({password})}
                />
              </Item>
            </View>
            <View>
              <Text style={styles.txtForgot}>Forgot your password ? </Text>
            </View>
            <View>
              <Button
                style={styles.btnLogin}
                //onPress={() => this.props.navigation.navigate('MenuTabs')}
                onPress={() => this.loginUser()}
                rounded
                block>
                <Text style={styles.txtLogin}>Log in</Text>
              </Button>
            </View>
            <View>
              {this.props.user.data.success ? (
                this.props.navigation.navigate('MenuTabs')
              ) : (
                <Text style={{color: '#ff0000', textAlign: 'center'}}>
                  {this.props.user.data.message}
                </Text>
              )}
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

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Login);
