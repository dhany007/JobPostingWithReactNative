/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Alert, TextInput} from 'react-native';
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
  Item,
} from 'native-base';

import qs from 'qs';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';

import styles from './style';

import {connect} from 'react-redux';

import {addCategory} from './../../../redux/action/category';

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_category: '',
    };
  }
  addNewCategory = () => {
    const name_category = this.state.name_category;
    console.log(name_category);
    Alert.alert('Add Category', 'Successfull added new category', [
      {
        text: 'Ok',
        onPress: () => {
          this.props.dispatch(addCategory({name_category}));
          console.log('sesuatu')
          this.props.navigation.navigate('Category');
        },
      },
    ]);
  };
  render() {
    console.log(this.state.name_category);
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
            <Title style={styles.titleHeader}>Add Category</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <View style={{backgroundColor: '#ffffff', margin: 20}}>
            <View>
              <Item style={styles.inpName} rounded>
                <TextInput
                  style={styles.txtInput}
                  placeholder="Enter Name Category"
                  onChangeText={TextInputValue =>
                    this.setState({name_category: TextInputValue})
                  }
                />
              </Item>
            </View>
            <View style={{marginTop: 20}}>
              <Button
                style={styles.btnAdd}
                onPress={() => this.addNewCategory()}
                rounded
                block>
                <Text style={styles.txtAdd}>Add</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category,
});

export default connect(mapStateToProps)(AddCategory);
