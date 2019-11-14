/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Card,
  CardItem,
  Button,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import styles from './style';

import {connect} from 'react-redux';
import {getCompany} from '../../../redux/action/company';

class Company extends Component {
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
    await this.props.dispatch(getCompany());
  };
  goToDetail = id_company => {
    this.props.navigation.navigate('Detail', {id_company});
  };

  render() {
    console.log(this.props.data);
    return (
      <Container style={{backgroundColor: '#ffffff'}}>
        <Header noLeft style={styles.header}>
          <Left />
          <Body>
            <Title style={styles.titleHeader}>Company</Title>
          </Body>
          <Right>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AddCompany')}>
              <Button transparent>
                <Icon name="plus-circle" color="#0000ff" size={25} />
                <Text style={{marginLeft: 10}}>Add Company</Text>
              </Button>
            </TouchableOpacity>
          </Right>
        </Header>
        <ScrollView>
          <View style={{backgroundColor: '#ffffff'}}>
            <Text style={{marginTop: 15, marginBottom: 10, marginLeft: 20}}>
              Found {this.props.company.totalData} Companies
            </Text>
            <View style={styles.card}>
              {this.props.company.data.map((v, i) => (
                <TouchableOpacity
                  key={i.toString()}
                  onPress={() => this.goToDetail(v.id_company)}>
                  <Card>
                    <CardItem style={styles.cardJob}>
                      <Left>
                        <Image
                          source={{uri: v.logo}}
                          style={{height: 50, width: 50}}
                        />
                        <View style={{marginLeft: 10, padding: 5}}>
                          <Text style={styles.txtCompanyTitle}>
                            {v.name_company}
                          </Text>
                        </View>
                      </Left>
                      <Right>
                        <Icon name="chevron-right" color="#adadad" size={20} />
                      </Right>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  company: state.company,
});

export default connect(mapStateToProps)(Company);
