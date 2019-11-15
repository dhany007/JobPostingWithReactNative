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
  Item,
} from 'native-base';

import qs from 'qs';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';

import styles from './style';

import {connect} from 'react-redux';

import {getCategory} from '../../../redux/action/category';
import {getCompany} from '../../../redux/action/company';
import {addJob} from '../../../redux/action/job';

class EditJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_job: props.job.name_job,
      description_job: props.job.description_job,
      category: props.job.category,
      salary: props.job.salary,
      location_job: props.job.location_job,
      company: props.job.company,
    };
  }
  updateJob = () => {
    const name_job = this.state.name_job;
    const description_job = this.state.description_job;
    const category = this.state.category;
    const salary = this.state.salary;
    const location_job = this.state.location_job;
    const company = this.state.company;

    const data = {
      name_job,
      description_job,
      category,
      salary,
      location_job,
      company,
    };
    Alert.alert('Update Job', 'Successfull updated a job', [
      {
        text: 'Ok',
        onPress: () => {
          this.props.dispatch(addJob(qs.stringify(data)));
          console.log('sesuatu');
          this.props.navigation.navigate('Job');
        },
      },
    ]);
  };
  componentDidMount() {
    this.getCategory();
    this.getCompany();
  }
  getCategory = async () => {
    await this.props.dispatch(getCategory());
  };
  getCompany = async () => {
    await this.props.dispatch(getCompany());
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
            <Title style={styles.titleHeader}>Edit Job</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <View style={{backgroundColor: '#ffffff', margin: 20}}>
            <View>
              <Item style={styles.inpName} rounded>
                <TextInput
                  style={styles.txtInput}
                  placeholder="Enter Name Job"
                  value={this.state.name_job}
                  onChangeText={TextInputValue =>
                    this.setState({name_job: TextInputValue})
                  }
                />
              </Item>
              <Item style={styles.inpName} rounded>
                <TextInput
                  style={styles.txtInput}
                  placeholder="Enter Description Job"
                  onChangeText={TextInputValue =>
                    this.setState({description_job: TextInputValue})
                  }
                />
              </Item>
              <Item style={styles.inpName} rounded>
                <TextInput
                  style={styles.txtInput}
                  placeholder="Enter Category Job"
                  onChangeText={TextInputValue =>
                    this.setState({category: TextInputValue})
                  }
                />
              </Item>
              <Item style={styles.inpName} rounded>
                <TextInput
                  style={styles.txtInput}
                  placeholder="Enter Salary Job"
                  onChangeText={TextInputValue =>
                    this.setState({salary: TextInputValue})
                  }
                />
              </Item>
              <Item style={styles.inpName} rounded>
                <TextInput
                  style={styles.txtInput}
                  placeholder="Enter Location Job"
                  onChangeText={TextInputValue =>
                    this.setState({location_job: TextInputValue})
                  }
                />
              </Item>
              <Item style={styles.inpName} rounded>
                <TextInput
                  style={styles.txtInput}
                  placeholder="Enter Company"
                  onChangeText={TextInputValue =>
                    this.setState({company: TextInputValue})
                  }
                />
              </Item>
            </View>
            <View style={{marginTop: 20}}>
              <Button
                style={styles.btnAdd}
                onPress={() => this.updateJob()}
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
  job: state.job,
  company: state.company,
});

export default connect(mapStateToProps)(EditJob);
