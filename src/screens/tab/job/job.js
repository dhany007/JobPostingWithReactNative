/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {
  Container,
  H2,
  Button,
  Header,
  Left,
  Body,
  Right,
  Item,
  Title,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';

import styles from './style';

class Job extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#f0f0f0'}}>
        <ScrollView>
          <Header noLeft style={styles.header}>
            <Left />
            <Body>
              <Title style={styles.titleHeader}>Job</Title>
            </Body>
            <Right />
          </Header>
          <View>
            <View style={styles.search}>
              <Item style={styles.inpSearch} rounded>
                <TextInput style={styles.txtSearch} placeholder="Search Job" />
              </Item>
              <View style={{marginLeft: 10}} />
              <Button style={styles.btnSearch} rounded>
                <Icon
                  style={styles.iconSearch}
                  name="search"
                  color="#ffffff"
                  size={20}
                />
              </Button>
            </View>
            <View style={{backgroundColor: '#ffffff'}}>
              <View>
                <Card>
                  
                </Card>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default Job;
