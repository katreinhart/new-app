import { View, Text, ImageBackground, StatusBar, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';
import CarouselComponent from '../components/Carousel';
import QuoteCard from '../components/QuoteCard';

const data = [
    {
      id: 1,
      title: 'Image 1',
      image: require('../../assets/images/thumbnail-1.png'),
    },
    {
      id: 2,
      title: 'Image 2',
      image: require('../../assets/images/thumbnail-2.png'),
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
                <ScrollView style={styles.scrollView}
                    contentContainerStyle={{paddingBottom: 120}}>
                    <QuoteCard text='"My thoughts become my reality."' attribution="— Kat" />
                
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
                    
                    <CarouselComponent 
                        data={data}
                    />
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
        flex: 1,
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

  });


export default HomeScreen;