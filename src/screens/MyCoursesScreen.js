import { View, Text, StatusBar, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import Button from '../components/Button';
import Card from '../components/Card';
import ErrorComponent from '../components/Error';
import Loading from '../components/Loading';

const GET_COURSES = gql`
    query EnrolledCourses {
        courses(enrolled: true) {
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

const backgroundImage = require('../../assets/pastel-background.png');
const courseImage1 = require('../../assets/images/course-image-1.png');
const courseImage2 = require('../../assets/images/course-image-2.png');

const MyCoursesScreen = ({ navigation }) => {
    const { loading, error, data } = useQuery(GET_COURSES);

    if (loading) return <Loading/>
    if (error) return <ErrorComponent message={error.message}/>

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                <Text style={styles.title}>✨ My Courses ✨</Text>
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


export default MyCoursesScreen;