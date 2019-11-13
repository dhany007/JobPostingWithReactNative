const React = require('react-native');
const {Dimensions} = React;
const deviceWidth = Dimensions.get('window').width;

export default {
  header: {
    backgroundColor: '#ffffff',
  },
  titleHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4a4848',
  },
  search: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  txtSearch: {
    paddingLeft: 20,
  },
  inpSearch: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: deviceWidth - 100,
    marginBottom: 10,
  },
  iconSearch: {
    padding: 10,
  },
  btnSearch: {
    width: 43,
    backgroundColor: '#6FAF98',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  }
};
