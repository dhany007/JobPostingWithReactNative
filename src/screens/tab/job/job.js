/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TextInput, Image} from 'react-native';
import {
  Container,
  Button,
  Header,
  Left,
  Body,
  Right,
  Item,
  Title,
  Card,
  CardItem,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import styles from './style';

import {connect} from 'react-redux';
import {getJob} from '../../../redux/action/job';

class Job extends Component {
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
    await this.props.dispatch(getJob());
  };
  goToDetail = id_job => {
    this.props.navigation.navigate('Detail', {id_job});
  };

  render() {
    console.log(this.props.data);
    return (
      <Container style={{backgroundColor: '#f0f0f0'}}>
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
        </View>
        <ScrollView>
          <View style={{backgroundColor: '#ffffff'}}>
            <View style={styles.card}>
              {this.props.job.data.map((v, i) => (
                <TouchableOpacity
                  key={i.toString()}
                  onPress={() => this.goToDetail(v.id_job)}>
                  <Card>
                    <CardItem style={styles.cardJob}>
                      <Left>
                        <Image
                          source={{uri: v.logo}}
                          style={{height: 50, width: 50}}
                        />
                        <View style={{marginLeft: 10, padding: 5}}>
                          <Text style={styles.txtJobTitle}>{v.name_job}</Text>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{width: 20, justifyContent: 'center'}}>
                              <Icon name="building" color="#adadad" size={13} />
                            </View>
                            <View>
                              <Text>{v.name_company}</Text>
                            </View>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{width: 20, justifyContent: 'center'}}>
                              <Icon
                                name="map-marker-alt"
                                color="#adadad"
                                size={13}
                              />
                            </View>
                            <View>
                              <Text>{v.location_job}</Text>
                            </View>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{width: 20, justifyContent: 'center'}}>
                              <Icon
                                name="money-bill-alt"
                                color="#adadad"
                                size={13}
                              />
                            </View>
                            <View>
                              <Text>
                                {v.salary.toLocaleString('IDR-ID', {
                                  style: 'currency',
                                  currency: 'IDR',
                                  maximumSignificantDigits: 1,
                                })}
                              </Text>
                            </View>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <Text>
                              {v.date_update
                                .toLocaleString()
                                .replace(/T/, ' ')
                                .replace(/\..+/, '')}
                            </Text>
                          </View>
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
  job: state.job,
});

export default connect(mapStateToProps)(Job);
