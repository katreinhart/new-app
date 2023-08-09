import React from 'react';
import { View, Text, StatusBar, SectionList, Pressable, Image, ScrollView } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import styles from '../styles';

import Button from '../components/Button';
import Loading from '../components/Loading';

const GET_COURSE_DETAILS = gql`
  query Course($courseId: ID!) {
    course(courseId: $courseId) {
      title
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
          lessonId
          description
          imageURL
          title
        }
      }
    }
  } 
`

const CourseDetailScreen = ({ navigation, route }) => {
    const { loading, error, data } = useQuery(GET_COURSE_DETAILS, { variables: { courseId: route.params.courseId }});
    const [expandedSections, setExpandedSections] = React.useState(new Set());

    if (loading) return <Loading/>
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

    const handleToggle = (title) => {
        setExpandedSections((expandedSections) => {
          const next = new Set(expandedSections);
          if (next.has(title)) {
            next.delete(title);
          } else {
            next.add(title);
          }
          return next;
        });
        console.log("expanded sections:", expandedSections)
      };

    return (
        <View style={styles.container}>
        <ScrollView contentContainerStyle={{
            ...styles.scrollView,
            vertical: true,
            directionalLockEnabled: false,    
        }}>
            <StatusBar style="auto" />
            
            <Image
                style={styles.hero}
                source={{
                    uri: imageURL
                }}
            />
            <Text style={styles.title}>✨{title}✨</Text>

            <Text style={styles.paragraph}>{description}</Text>

            {sections.map((item) => {
                return (
                    <View key={item.title}>
                        <Pressable onPress={() => handleToggle(item.title)}>
                            <Text style={styles.headerText}>{item.title}</Text>
                        </Pressable>

                        {item.data.map((i) => {
                            const isExpanded = expandedSections.has(item.title);
                            
                            if (!isExpanded) return null;
                            return (
                                <Pressable onPress={() => {
                                    navigation.navigate('LessonScreen', { id: i.id })
                                }}>
                                    <Text style={styles.listItem}>{i.title}</Text>
                                </Pressable>
                            )
                        })}
                    </View>
                )
            })}

            <Button 
                title="Go Home"
                onPress={() => {
                    navigation.navigate('Home')
                }} 
            />
        </ScrollView>
        </View>
    )
}

export default CourseDetailScreen;