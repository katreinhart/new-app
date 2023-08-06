import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#013',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight || 0,
        margin: 0,
        justifyContent: 'center',
        color: '#fff', 
        width: '100%'
    },
    scrollView: {
        backgroundColor: '#013',
        alignItems: 'center',
        justifyContent: 'center',
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
    video: {
        width: 400,
        height: 300
    },
    hero: {
        width: 400,
        height: 200
    },
    listItem: {
        fontSize: 20,
        padding: 10,
        color: '#fed'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 200,
      borderColor: '#fca',
      shadowColor: '#fdb',
      color: '#fdd',
      borderRadius: 6,
      backgroundColor: "#135"
    },
    button: {
      height: 40,
      backgroundColor: "purple",
      borderRadius: 20,
      width: 200,
      alignItems: 'center',
      padding: 10,
      margin: 10
    },
    buttonText: {
      color: "#fca",
      fontWeight: "bold",
      fontSize: 16
    },
    card: {
      color: "#fca",
      borderRadius: 20,
      borderColor: "#fca",
      borderWidth: 1,
      minHeight: 40,
      width: 325,
      margin: 12
    },
    cardImage: {
      flex: 1,
      width: '100%',
      height: 150,
      borderRadius: 20
    },
    cardText: {
      color: "#fed",
      fontSize: 20,
      fontWeight: '400',
      padding: 10,
      textAlign: 'center'
    },
    headerText: {
      color: "#fca",
      fontSize: 28,
      fontWeight: 300
    },
    headerSubtext: {
      flex: 0.5,
      color: "#fca",
      fontSize: 16,
      fontWeight: 300
    },
    quote: {
      color: "#fca",
      fontSize: 20,
      fontWeight: 300,
      padding: 10,
      textAlign: 'center'
    },
    slide: {
      flex: 0.15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 8,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 8,
    },
    title: {
      marginTop: 16,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export const headerOptions = {
    headerStyle: {
        backgroundColor: '#013',
    },
    headerTintColor: '#fed',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}

export const mainNavigationHeader = {
    // headerStyle: {
    //     backgroundColor: '#013',
    // },
    // headerShadowVisible: false,
    // headerTintColor: '#013',
    // headerTitleStyle: {
    //     fontWeight: 'bold'
    // },
    headerShown: false
}

export default styles;