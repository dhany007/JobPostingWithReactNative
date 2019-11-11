/* eslint-disable no-unused-vars */
const React = require('react-native');
const {Dimensions} = React;
const deviceHeight = Dimensions.get('window').height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30,
  },
  logo: {
    position: 'absolute',
    left: 40,
    top: 35,
    width: 280,
    height: 100,
  },
  text: {
    color: '#D8D8D8',
    bottom: 6,
    marginTop: 5,
  },
};
