import { View, Text, ImageBackground, StatusBar, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';
import CarouselComponent from '../components/Carousel';

const data = [
    {
      id: 1,
      title: 'Image 1',
    //   image: require('./path/to/image1.jpg'),
    },
    {
      id: 2,
      title: 'Image 2',
    //   image: require('./path/to/image2.jpg'),
    },
    // Add more items as needed
  ];

const backgroundImage = require('../../assets/pastel-background.png');
const courseImage1 = require('../../assets/images/course-image-1.png');
const courseImage2 = require('../../assets/images/course-image-2.png');

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                <Header
                    text="✨ Good morning, Kat ✨"
                />
                <ScrollView>
                    <Text style={styles.quote}>✨ My thoughts become my reality. ✨</Text>
                    <Card title="🧘🏻‍♀️ Meditation" 
                        subtext="Continue where you left off"
                        image={courseImage1} 
                        onPress={() => {
                            console.log("pressed")
                    }}/>
                    <Card title="Accelerating your Manifestations" 
                        image={courseImage2}
                        onPress={() => {
                        console.log("pressed")
                    }}/>
                    {/* <CarouselComponent 
                        data={data}
                    /> */}
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#013',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight || 0,
        justifyContent: 'center',
        color: '#fff', 
        width: '100%'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
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


export default HomeScreen;