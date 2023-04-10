import React from 'react';
import { View, Text, StatusBar, SectionList, Pressable, Image } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { Video } from 'expo-av';

import Loading from '../components/Loading';
import ErrorComponent from '../components/Error';
// import VideoPlayer from '../components/Video';

import styles from '../styles';

const LESSON = gql`
    query Lesson($lessonId: ID!) {
        lesson(id: $lessonId) {
            title
            description 
            videoURL
            imageURL
        }
    }
`

const LessonScreen = ({ route }) => {
    console.log(route);
    const { loading, error, data } = useQuery(LESSON, { variables: { lessonId: route.params.id }});
    if (loading) return <Loading />
    if (error) return <ErrorComponent error={error}/>
    
    console.log(data.lesson.videoURL);
    return (
        <View style={styles.container}>
            {/* <Image source={{ uri: data.lesson.imageURL }} style={styles.hero} /> */}
            <Video 
                source={{ uri: data.lesson.videoURL }} 
                style={styles.video} 
                useNativeControls
                resizeMode="contain"
                isLooping
            />
            <Text style={styles.title}>{data.lesson.title}</Text>
            <Text style={styles.paragraph}>{data.lesson.description}</Text>
            <StatusBar style="auto" />
        </View>
    )
};

export default LessonScreen;