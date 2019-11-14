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
import {getCompany, deleteCompany} from '../../../redux/action/company';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_company: props.navigation.getParam('id_company'),
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch(getCompany());
  };

  deleteCompany = id_category => {
    Alert.alert('Delete', 'Are you sure ?', [
      {
        text: 'Cancel',
        onPress: () => null,
      },
      {
        text: 'Ok',
        onPress: () => {
          this.props.dispatch(deleteCompany(id_category));
          this.forceUpdate();
          this.props.navigation.navigate('Company');
        },
      },
    ]);
  };

  render() {
    console.log(this.state.id_company);
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
            <Title style={styles.titleHeader}>Detail Company</Title>
          </Body>
          <Right>
            <TouchableOpacity>
              <Button transparent>
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
                  onPress={() => this.deleteCompany(this.state.id_company)}
                />
              </Button>
            </TouchableOpacity>
          </Right>
        </Header>
        <ScrollView>
          {this.props.company.isLoading && <Spinner />}
          {!this.props.company.isLoading && (
            <React.Fragment>
              {this.props.company.data
                .filter(data => data.id_company === this.state.id_company)
                .map((v, i) => (
                  <View key={i.toString()}>
                    <View style={{marginLeft: 20, marginRight: 20}}>
                      <Card transparent>
                        <CardItem style={{justifyContent: 'center'}}>
                          <Image
                            source={{uri: v.logo}}
                            style={styles.imgCompany}
                          />
                        </CardItem>
                        <CardItem style={{justifyContent: 'center'}}>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: 'bold',
                              marginBottom: 20,
                            }}>
                            {v.name_company}
                          </Text>
                        </CardItem>
                        <CardItem>
                          <Text>{v.description_company}</Text>
                        </CardItem>
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
  company: state.company,
});

export default connect(mapStateToProps)(Detail);
