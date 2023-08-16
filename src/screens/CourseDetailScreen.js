import React from 'react';
import { View, Text, StatusBar, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { useQuery, gql } from '@apollo/client';

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
      enrolled
      description
      imageURL
      modules {
        description
        title
        lessons {
          lessonId
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
  hero: {
      width: 400,
      height: 200
  },
  // scrollView: {
  //     flex: 1,
  // },
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
  paragraph: {
      fontSize: 16,
      padding: 10,
      color: '#fcc'
  },
});

export default CourseDetailScreen;