const React = require('react-native');
const {Dimensions} = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  drawerCover: {
    alignSelf: 'stretch',
    height: deviceHeight / 3.5,
    width: null,
    position: 'relative',
    marginBottom: 10,
  },
  drawerImage: {
    position: 'absolute',
    left: deviceWidth / 10,
    top: deviceHeight / 13,
    width: 210,
    height: 75,
    resizeMode: 'cover',
  },
  text: {
    fontWeight: 400,
    fontSize: 16,
    marginLeft: 20,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: -3,
  },
};
