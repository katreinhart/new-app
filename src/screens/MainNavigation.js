
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { gql, useQuery } from '@apollo/client';
import { Text } from 'react-native';
import getToken from '../apolloconfig'

const Stack = createNativeStackNavigator();

const ME = gql`
    query Me {
        me {
            token
            firstName
        }
    }
`;

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import CoursesScreen from './CoursesScreen';
import AuthorsScreen from './AuthorsScreen';
import CourseDetailScreen from './CourseDetailScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignupScreen';

const MainNavigation = async () => {
    const token = await getToken();
    
    const { loading, error, data } = useQuery(ME, {
        context: {
            headers: {
                authorization: token ? token : ""
            }
        }
    });

    if (loading) return <Text>Loading...</Text> 
    if ((error) || ((!data.me) || (!data.me.token))) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Sign Up" component={SignUpScreen} />
            </Stack.Navigator>
        )
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Courses" component={CoursesScreen} />
            <Stack.Screen name="Authors" component={AuthorsScreen} />
            <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigation;