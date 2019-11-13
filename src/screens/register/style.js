const React = require('react-native');
const {Dimensions} = React;
const deviceWidth = Dimensions.get('window').width;
export default {
  txtHeader: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#4a4848',
    marginTop: 20,
    marginBottom: 30,
  },
  txtInput: {
    paddingLeft: 20,
  },
  inpLogin: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnLogin: {
    alignSelf: 'center',
    backgroundColor: '#6FAF98',
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  txtLogin: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 17,
  },
  viewSosmed: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  txtOr: {
    color: '#adadad',
    textAlign: 'center',
    marginBottom: 20,
  },
  btnLogSosMed: {
    justifyContent: 'center',
    width: deviceWidth / 2 - 30,
  },
  txtLogSosMed: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 15,
    marginLeft: 10,
  },
  txtForgot: {
    marginTop: 10,
    color: '#adadad',
    textAlign: 'center',
  },
  linkSignup: {
    color: '#adadad',
    textAlign: 'center',
    marginTop: 20,
  },
  txtSignup: {
    color: '#6FAF98',
    fontWeight: 'bold',
  },
};
