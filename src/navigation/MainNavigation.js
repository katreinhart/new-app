
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
import AvailableCoursesScreen from '../screens/AvailableCoursesScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignupScreen';
import CourseNavigation from './CourseNavigation';

import { headerOptions, mainNavigationHeader } from '../styles';

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
                options={mainNavigationHeader}  
            />
            <BottomTab.Screen name="Courses" component={CourseNavigation} options={mainNavigationHeader} />
            <BottomTab.Screen name="Explore" component={AvailableCoursesScreen} options={mainNavigationHeader} />
            <BottomTab.Screen name="Profile" component={ProfileScreen} options={mainNavigationHeader} />
        </BottomTab.Navigator>
    )
}

export default MainNavigation;