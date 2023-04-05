import React from 'react';
import { View, Text, StatusBar, SectionList, Pressable, Image } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import styles from '../styles';

import Button from '../components/Button';

const GET_COURSE_DETAILS = gql`
    query Course($courseId: ID!) {
        course(id: $courseId) {
            author {
                firstName
                lastName
            }
            description
            imageURL
            modules {
                description
                title
                lessons {
                    id
                    description
                    imageURL
                    title
                }
            }
        }
    }
`

const CourseDetailScreen = ({ navigation, route }) => {
    const { loading, error, data } = useQuery(GET_COURSE_DETAILS, { variables: { courseId: route.params.id }});
    const [expandedSections, setExpandedSections] = React.useState(new Set());

    if (loading) return <Text>Loading...</Text> 
    if (error) return <Text>Error: { error.message }</Text>

    const { course: { title, imageURL, description, modules }} = data

    const sections = modules.map((item) => {
        return {
            title: item.title,
            data: item.lessons.map((i) => ({
                title: i.title,
                id: i.id,
            })),
        }
    });

    console.log(sections);

    const handleToggle = (title) => {
        setExpandedSections((expandedSections) => {
          // Using Set here but you can use an array too
          const next = new Set(expandedSections);
          if (next.has(title)) {
            next.delete(title);
          } else {
            next.add(title);
          }
          return next;
        });
      };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>✨ {title} ✨</Text>
            
            <Image
                style={styles.hero}
                source={{
                    uri: imageURL
                }}
            />

            <Text style={styles.paragraph}>{description}</Text>
            
            <Text>Modules</Text>

            <SectionList
                sections={sections}
                keyExtractor={(item, index) => item + index}
                renderItem={({ section: { title}, item }) => {
                    const isExpanded = expandedSections.has(title);
                    if (!isExpanded) return null;
                    return (
                        <Pressable onPress={() => {
                            navigation.navigate('LessonScreen', { id: item.id })
                        }}>
                            <Text style={styles.listItem}>{item.title}</Text>
                        </Pressable>
                    )
                }}
                renderSectionHeader={({section: {title}}) => (
                    <Pressable onPress={() => handleToggle(title)}>
                        <Text style={styles.headerText}>{title}</Text>
                    </Pressable>
                )}
            />

            <Button 
                title="Go Home"
                onPress={() => {
                    navigation.navigate('Home')
                }} 
            />
        </View>
    )
}

export default CourseDetailScreen;