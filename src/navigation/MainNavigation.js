
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { gql, useReactiveVar } from '@apollo/client';
import { tokenVar } from '../state/reactive-vars';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const ME = gql`
    query Me {
        me {
            token
            firstName
        }
    }
`;

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AuthorsScreen from '../screens/AuthorsScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignupScreen';
import CourseNavigation from './CourseNavigation';

import { headerOptions } from '../styles';

const MainNavigation = () => {
    const token = useReactiveVar(tokenVar);

    if (!token) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={headerOptions}/>
                <Stack.Screen name="Sign Up" component={SignUpScreen} options={headerOptions} />
            </Stack.Navigator>
        )
    }

    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#013',
                    height: 90,
                },
                tabBarActiveTintColor: "#6af",
                tabBarInactiveTintColor: "#dca"
            }}
            
            
        >
            <BottomTab.Screen name="Home" 
                component={HomeScreen} 
                options={headerOptions}  
            />
            <BottomTab.Screen name="Courses" component={CourseNavigation} options={headerOptions} />
            <BottomTab.Screen name="Authors" component={AuthorsScreen} options={headerOptions} />
            <BottomTab.Screen name="Profile" component={ProfileScreen} options={headerOptions} />
        </BottomTab.Navigator>
    )
}

export default MainNavigation;