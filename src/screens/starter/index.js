/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ImageBackground, View, StatusBar} from 'react-native';
import {Container, Button, H3, H1, Text} from 'native-base';

import styles from './style';

const launchscreenBg = require('../../../assets/launchBg.png');

class Starter extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
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
            <Button style={styles.btnGo} rounded>
              <Text style={{marginRight: 70, marginLeft: 70}}>Get Started</Text>
            </Button>
            <Text style={styles.launchLogin}>
              Already have account ? Log in
            </Text>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Starter;
