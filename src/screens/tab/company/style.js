const React = require('react-native');
const {Dimensions} = React;
const deviceWidth = Dimensions.get('window').width;

export default {
  header: {
    margin: 0,
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  titleHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4a4848',
  },
  card: {
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  detailJob: {
    padding: 10,
  },
  cardJob: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  txtCompanyTitle: {
    fontSize: 15,
    color: '#4a4848',
  },
  line: {
    borderBottomColor: '#adadad',
    borderBottomWidth: 1,
  },
  imgCompany: {
    width: 200,
    height: 200,
  },
};
