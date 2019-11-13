/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ImageBackground, View, StatusBar, Text} from 'react-native';
import {Container, Button, H3, H1} from 'native-base';

import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';

const launchscreenBg = require('../../../assets/launchBg.png');

class Starter extends Component {
  render() {
    return (
      <Container style={{marginLeft: 25, marginRight: 25}}>
        <ScrollView>
          <StatusBar barStyle="light-content" />
          <ImageBackground
            source={launchscreenBg}
            style={styles.imageContainer}>
            <View
              style={{
                alignItems: 'center',
                marginBottom: 50,
                backgroundColor: 'transparent',
              }}>
              <H1 style={styles.headText}>Job Posting</H1>
              <H3 style={styles.text}>
                Find a job you love with our job site. Apply today.
              </H3>
            </View>
            <View>
              <Button
                style={styles.btnGo}
                onPress={() =>
                  this.props.navigation.navigate('PreLoginRegister')
                }
                rounded
                block>
                <Text style={styles.txtStarted}>Get Started</Text>
              </Button>
              <Text style={styles.launchLogin}>
                Already have account ?
                <Text
                  style={styles.txtSignup}
                  onPress={() => this.props.navigation.navigate('Login')}>
                  {' '}
                  Log in
                </Text>
              </Text>
            </View>
          </ImageBackground>
        </ScrollView>
      </Container>
    );
  }
}

export default Starter;
