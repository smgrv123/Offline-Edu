import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  head: {
    color: '#BC6FF1',
    fontSize: 30,
    justifyContent: 'space-around',
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  base: {
    backgroundColor: '#000',
    flex: 1,
    paddingTop:"10%"
  },
  button1: {
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: '#52057B',
    borderRadius: 10,
    // height: 40,
    marginTop: '10%',
    elevation: 15,
    justifyContent: 'center',
  },
  text1: {
    color: '#BC6FF1',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  welcomeT:{
    color: '#F38BA0',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    padding: '10%',
    paddingBottom: '2%',
    paddingTop: '2%',
  },
  welcome:{
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: '#F38BA0',
    elevation: 20,
    borderRadius: 5,
  }
});
export default styles;
