import React from 'react';
import { View, Text, StatusBar, SectionList, Pressable, Image } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import styles from '../styles';

import Button from '../components/Button';

const GET_COURSE_DETAILS = gql`
    query Course($id: ID!) {
        course(id: $id) {
            title
            description
            imageURL
            modules {
                title
                lessons {
                    title
                }
            }
        }
    }
`

const CourseDetailScreen = ({ navigation, route }) => {
    const { loading, error, data } = useQuery(GET_COURSE_DETAILS, { variables: { id: route.params.id }});

    if (loading) return <Text>Loading...</Text> 
    if (error) return <Text>Error: { error.message }</Text>

    const { course: { title, imageURL, description, modules }} = data

    const sections = modules.map((item) => {
        return {
            title: item.title,
            data: item.lessons.map((i) => i.title)
        }
    });

    const [expandedSections, setExpandedSections] = React.useState(new Set());

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
                        <View>
                            <Text style={styles.listItem}>{item}</Text>
                        </View>
                    )
                }}
                renderSectionHeader={({section: {title}}) => (
                    <Pressable onPress={() => handleToggle(title)}>
                        <Text style={styles.headerText}>{title}</Text>
                    </Pressable>
                )}
            />
            
            {/* <FlatList 
                data = {data.course.modules}
                renderItem={({item}) => <Text style={styles.listItem}>{item.title}</Text>}
            /> */}

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