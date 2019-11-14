/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
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
import {getCategory} from '../../../redux/action/category';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    await this.props.dispatch(getCategory());
  };
  goToDetail = id_category => {
    this.props.navigation.navigate('Detail', {id_category});
  };

  render() {
    console.log(this.props.data);
    return (
      <Container style={{backgroundColor: '#ffffff'}}>
        <Header noLeft style={styles.header}>
          <Left />
          <Body>
            <Title style={styles.titleHeader}>Category</Title>
          </Body>
          <Right />
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
                        {v.name_category}>
                      </Text>
                    </Left>
                    <Right>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <Button transparent style={{marginRight: 20}}>
                          <Icon
                            name="edit"
                            color="#ffc400"
                            size={20}
                            onPress={() => alert('Coming soon.')}
                          />
                        </Button>
                        <Button transparent>
                          <Icon
                            name="trash"
                            color="#ff0000"
                            size={20}
                            onPress={() => alert('Coming soon.')}
                          />
                        </Button>
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
