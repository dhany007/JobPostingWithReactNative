/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Alert} from 'react-native';
import {
  Container,
  Button,
  Header,
  Left,
  Body,
  Right,
  Title,
  Card,
  CardItem,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';

import styles from './style';

import {connect} from 'react-redux';

class AddJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameJob: '',
    };
  }
  render() {
    return (
      <Container style={{backgroundColor: '#ffffff'}}>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon
                name="arrow-left"
                color="#4a4848"
                size={20}
                onPress={() => this.props.navigation.goBack()}
              />
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleHeader}>Add Job</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <View style={{backgroundColor: '#ffffff'}}>
            <Text>aaa</Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category,
});

export default connect(mapStateToProps)(AddJob);
