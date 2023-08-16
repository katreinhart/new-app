// React functional component to populate the Available Courses (Explore) screen

import * as React from 'react';
import { View, Text, StatusBar, FlatList, StyleSheet, ImageBackground } from 'react-native';

import Button from '../components/Button';
import Card from '../components/Card';
import ErrorComponent from '../components/Error';
import Loading from '../components/Loading';

import { gql, useQuery } from '@apollo/client';

const backgroundImage = require('../../assets/pastel-background.png');

const GET_COURSES = gql`
    query Courses {
        courses(enrolled: false) {
            courseId
            title
            imageURL
            description
            modules {
                title
            }
        }
    }
`

const AvailableCoursesScreen = ({ navigation }) => {

    const { loading, error, data } = useQuery(GET_COURSES);

    if (loading) return <Loading/>
    if (error) return <ErrorComponent message={error.message}/>

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                <Text style={styles.title}>✨ Available Courses ✨</Text>
                <FlatList 
                    data = {data.courses}
                    renderItem={({item}) => <Card 
                        image={{ uri: item.imageURL}}
                        title={item.title}
                        onPress={() => {
                            navigation.navigate('CourseDetailScreen', { courseId: item.courseId })
                        }}
                    />}
                />
                
                <StatusBar style="auto" />
                <Button 
                    title="Go Home"
                    onPress={() => {
                        navigation.navigate('Home')
                    }} 
                />
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
        paddingTop: 0,
        justifyContent: 'center',
        color: '#fff', 
        width: '100%'
    },
    title: {
        fontSize: 24,
        marginTop: 80,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#013',
        fontWeight: 'bold',
        textAlign: 'center'
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
});

export default AvailableCoursesScreen;