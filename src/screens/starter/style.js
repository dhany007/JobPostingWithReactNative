const React = require('react-native');
const {Dimensions} = React;
const deviceHeight = Dimensions.get('window').height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  headText: {
    marginTop: deviceHeight / 10,
    fontWeight: 'bold',
    color: '#4a4848',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#adadad',
    marginBottom: 70,
  },
  txtStarted: {
    color: '#ffffff',
    fontSize: 17,
  },
  btnGo: {
    marginTop: deviceHeight / 3,
    alignSelf: 'center',
    backgroundColor: '#6FAF98',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  launchLogin: {
    color: '#adadad',
    textAlign: 'center',
    marginTop: 20,
  },
  txtSignup: {
    color: '#6FAF98',
    fontWeight: 'bold',
  },
};
