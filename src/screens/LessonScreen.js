import React from 'react';
import { View, Text, StatusBar, SectionList, Pressable, Image } from 'react-native';
import Loading from '../components/Loading';
import { useQuery, gql } from '@apollo/client';

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
    if (error) return <Text>Error: { error.message }</Text>

    
    return (
        <View style={styles.container}>
            <Text>Lesson Screen</Text>
        </View>
    )
};

export default LessonScreen;