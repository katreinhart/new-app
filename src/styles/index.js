import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#013',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    },
    title: {
        fontSize: 30,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#fff'
    },
    paragraph: {
        fontSize: 16,
        padding: 10,
        color: '#fcc'
    },  
    hero: {
        flex: 1,
        width: 400,
        height: 200
    },
    listItem: {
        fontSize: 20,
        padding: 10,
        color: '#fca'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
        borderColor: '#fca',
        shadowColor: '#fdb',
        color: '#fdd'
      },
  });

export const headerOptions = {
    headerStyle: {
        backgroundColor: '#013',
    },
    headerTintColor: '#fca',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}

export default styles;