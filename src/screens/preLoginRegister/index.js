/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import {Container, Button} from 'native-base';

import Carousel, {Pagination} from 'react-native-snap-carousel';

import styles from './style';

export default class PreLoginRegister extends Component {
  constructor() {
    super();
    this.state = {
      activeSlide: 0,
      carouselItems: [
        {
          title: 'Professional Identity',
          subtitle:
            'Build your professional identity online and stay connected with opportunities.',
          illustration: require('../../../assets/card1.jpg'),
        },
        {
          title: 'Your Personal Page',
          subtitle:
            'Log in to your personal page and view jobs that match you.',
          illustration: require('../../../assets/card2.png'),
        },
        {
          title: 'Richer Job Ads',
          subtitle: 'Get Salary Matching, Location Map and Company Insights.',
          illustration: require('../../../assets/card3.jpg'),
        },
      ],
    };
  }
  _renderItem({item, index}) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={item.illustration} />
        <Text style={styles.txtTit}>{item.title}</Text>
        <Text style={styles.txtSub}>{item.subtitle}</Text>
      </View>
    );
  }
  get pagination() {
    const {carouselItems, activeSlide} = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: '#fff'}}
        dotStyle={{
          width: 7,
          height: 7,
          borderRadius: 5,
          marginHorizontal: 1,
          backgroundColor: '#adadad',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  render() {
    return (
      <Container>
        <SafeAreaView style={styles.carouselPage}>
          <Carousel
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={250}
            itemWidth={250}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeSlide: index})}
          />
          {this.pagination}
        </SafeAreaView>
        <View>
          <Button style={styles.btnLogin} rounded block>
            <Text style={styles.txtLogin}>Login</Text>
          </Button>
        </View>
        <View>
          <Button style={styles.btnRegister} rounded block>
            <Text style={styles.txtRegister}>Create Account</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
