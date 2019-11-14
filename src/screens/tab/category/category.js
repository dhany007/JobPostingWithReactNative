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
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import styles from './style';

import {connect} from 'react-redux';
import {getCategory, deleteCategory} from '../../../redux/action/category';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.category.data,
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    await this.props.dispatch(getCategory());
  };
  deleteCategory = id_category => {
    Alert.alert('Delete', 'Are you sure ?', [
      {
        text: 'Cancel',
        onPress: () => null,
      },
      {
        text: 'Ok',
        onPress: () => {
          this.props.dispatch(deleteCategory(id_category));
          this.forceUpdate();
          this.props.navigation.navigate('Category');
        },
      },
    ]);
  };

  render() {
    //const {data} = this.state;
    return (
      <Container style={{backgroundColor: '#ffffff'}}>
        <Header noLeft style={styles.header}>
          <Left />
          <Body>
            <Title style={styles.titleHeader}>Category</Title>
          </Body>
          <Right>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AddCategory')}>
              <Button transparent>
                <Icon name="plus-circle" color="#0000ff" size={25} />
                <Text style={{marginLeft: 10}}>Add Category</Text>
              </Button>
            </TouchableOpacity>
          </Right>
        </Header>
        <ScrollView>
          <View style={{backgroundColor: '#ffffff'}}>
            <Text style={{marginTop: 15, marginBottom: 10, marginLeft: 20}}>
              Found {this.props.category.totalData} Categories
            </Text>
            <View style={styles.card}>
              {this.props.category.data.map((v, i) => (
                <Card>
                  <CardItem key={i.toString()}>
                    <Left>
                      <Text style={styles.txtCompanyTitle}>
                        {v.name_category}
                      </Text>
                    </Left>
                    <Right>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <TouchableOpacity>
                          <Button transparent style={{marginRight: 20}}>
                            <Icon
                              name="edit"
                              color="#ffc400"
                              size={20}
                              onPress={() => alert('Coming soon.')}
                            />
                          </Button>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Button transparent>
                            <Icon
                              name="trash"
                              color="#ff0000"
                              size={20}
                              onPress={() => this.deleteCategory(v.id_category)}
                            />
                          </Button>
                        </TouchableOpacity>
                      </View>
                    </Right>
                  </CardItem>
                </Card>
              ))}
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

export default connect(mapStateToProps)(Category);
