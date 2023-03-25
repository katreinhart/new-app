import { View, Text, StatusBar, StyleSheet, Button, SectionList, FlatList, Image } from 'react-native';
import { useQuery, gql } from '@apollo/client';

const GET_COURSE_DETAILS = gql`
    query Course($id: ID!) {
        course(id: $id) {
            title
            description
            imageURL
            modules {
                title
            }
        }
    }
`

const CourseDetailScreen = ({ navigation, route }) => {
    const { loading, error, data } = useQuery(GET_COURSE_DETAILS, { variables: { id: route.params.id }});

    if (loading) return <Text>Loading...</Text> 
    if (error) return <Text>Error: { error.message }</Text>

    const { course: {title, imageURL, description }} = data

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
            {/* <SectionList /> */}
            
            {/* <SectionList
                sections={data.course.modules}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                    <View style={styles.item}>
                    <Text style={styles.title}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            /> */}

            <Text>Modules</Text>
            <FlatList 
                data = {data.course.modules}
                renderItem={({item}) => <Text>{item.title}</Text>}
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

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        paddingTop: 10,
        paddingBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        padding: 10
    },  
    hero: {
        flex: 1,
        width: 400,
        height: 200
    }
    });

export default CourseDetailScreen;