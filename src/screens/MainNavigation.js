
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
import { headerOptions } from '../styles';

const MainNavigation = () => {
    const { loading, error, data } = useQuery(ME);

    if (loading) return <Text>Loading...</Text> 
    if ((error) || ((!data.me) || (!data.me.token))) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={headerOptions}/>
                <Stack.Screen name="Sign Up" component={SignUpScreen} options={headerOptions} />
            </Stack.Navigator>
        )
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={headerOptions} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={headerOptions} />
            <Stack.Screen name="Courses" component={CoursesScreen} options={headerOptions} />
            <Stack.Screen name="Authors" component={AuthorsScreen} options={headerOptions} />
            <Stack.Screen name="CourseDetail" component={CourseDetailScreen} options={headerOptions} />
        </Stack.Navigator>
    )
}

export default MainNavigation;