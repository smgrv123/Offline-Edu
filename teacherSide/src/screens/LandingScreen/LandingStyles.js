import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000',
    flex: 1,
  },
  heading: {
    fontSize: 27,
    color: '#892CDC',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#BC6FF1',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    width: 100,
    marginTop: '2%',
    marginBottom: '2%',
  },
  loginText: {
    paddingTop: 15,
    fontSize: 20,
    paddingBottom: 15,
    textAlign: 'center',
    color: '#52057B',
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: '#892CDC',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    width: 100,
  },
  signupText: {
    paddingTop: 15,
    fontSize: 20,
    paddingBottom: 15,
    textAlign: 'center',
    color: '#BC6FF1',
    fontWeight: 'bold',
  },
});

export default styles;
