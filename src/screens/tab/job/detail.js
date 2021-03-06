/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image, Alert} from 'react-native';
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
  Spinner,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import styles from './style';

import {connect} from 'react-redux';
import {getJob, deleteJob} from '../../../redux/action/job';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      id_job: props.navigation.getParam('id_job'),
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch(getJob());
  };

  deleteJob = id_job => {
    Alert.alert('Delete', 'Are you sure ?', [
      {
        text: 'Cancel',
        onPress: () => null,
      },
      {
        text: 'Ok',
        onPress: () => {
          this.props.dispatch(deleteJob(id_job));
          this.forceUpdate();
          this.props.navigation.navigate('Job');
        },
      },
    ]);
  };

  render() {
    console.log(this.state.id_job);
    return (
      <Container style={{backgroundColor: '#ffff', flex: 1}}>
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
            <Title style={styles.titleHeader}>Detail Job</Title>
          </Body>
          <Right>
            <TouchableOpacity>
              <Button transparent>
                <Icon
                  name="edit"
                  color="#ffc400"
                  size={20}
                  onPress={() => this.props.navigation.navigate('EditJob')}
                />
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button transparent>
                <Icon
                  name="trash"
                  color="#ff0000"
                  size={20}
                  onPress={() => this.deleteJob(this.state.id_job)}
                />
              </Button>
            </TouchableOpacity>
          </Right>
        </Header>
        <ScrollView>
          {this.props.job.isLoading && <Spinner />}
          {!this.props.job.isLoading && (
            <React.Fragment>
              {this.props.job.data
                .filter(data => data.id_job === this.state.id_job)
                .map((v, i) => (
                  <View key={i.toString()}>
                    <View style={{marginLeft: 20, marginRight: 20}}>
                      <Card transparent>
                        <CardItem style={styles.detailJob}>
                          <Left>
                            <View>
                              <Image
                                source={{uri: v.logo}}
                                style={{height: 50, width: 50}}
                              />
                            </View>
                            <View
                              style={{
                                marginLeft: 20,
                                padding: 5,
                                marginRight: 70,
                              }}>
                              <Text style={styles.txtJobTitle}>
                                {v.name_job}
                              </Text>
                              <Text>{v.name_category}</Text>
                              <View style={{flexDirection: 'row'}}>
                                <View
                                  style={{
                                    width: 20,
                                    justifyContent: 'center',
                                    marginRight: 5,
                                  }}>
                                  <Icon
                                    name="building"
                                    color="#adadad"
                                    size={13}
                                  />
                                </View>
                                <View>
                                  <Text>{v.name_company}</Text>
                                </View>
                              </View>
                              <View style={{flexDirection: 'row'}}>
                                <View
                                  style={{
                                    width: 20,
                                    justifyContent: 'center',
                                    marginRight: 5,
                                  }}>
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
                                <View
                                  style={{
                                    width: 20,
                                    justifyContent: 'center',
                                    marginRight: 5,
                                  }}>
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
                            </View>
                          </Left>
                        </CardItem>
                        <View style={styles.line} />
                        <View>
                          <Text style={styles.desJob}>Description Job</Text>
                          <Text style={{textAlign: 'justify'}}>
                            {v.description_job}
                          </Text>
                          <Text style={{marginTop: 20}}>
                            Last Updated:{' '}
                            {v.date_update
                              .toLocaleString()
                              .replace(/T/, ' ')
                              .replace(/\..+/, '')}
                          </Text>
                        </View>
                        <View style={styles.viewApply}>
                          <Button style={styles.btnApply} rounded block>
                            <Text style={styles.txtApply}>Apply</Text>
                          </Button>
                        </View>
                      </Card>
                    </View>
                  </View>
                ))}
            </React.Fragment>
          )}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  job: state.job,
});

export default connect(mapStateToProps)(Detail);
