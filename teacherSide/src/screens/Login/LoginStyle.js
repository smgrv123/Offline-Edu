import { StyleSheet } from 'react-native';

const styles=StyleSheet.create({
    icon: {
        backgroundColor: '#fff',
        height: 48,
        paddingRight: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      },
      head: {
        color: '#892CDC',
        fontSize: 30,
        justifyContent: 'space-around',
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
      },
      button: {
        alignSelf: 'center',
        alignContent: 'center',
        backgroundColor: '#52057B',
        width: '50%',
        borderRadius: 20,
        height: 40,
      },
      title: {
        paddingLeft: '2%',
        fontSize: 17,
        marginBottom: '1%',
        color:"#892CDC",
        fontWeight:"bold"
      },
      base: {backgroundColor: '#000', flex: 1},
      text: {
        color: '#BC6FF1',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
      },
})
export default styles;