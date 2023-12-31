import { createStackNavigator } from '@react-navigation/stack';

import MyCoursesScreen from '../screens/MyCoursesScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import LessonScreen from '../screens/LessonScreen';

const Stack = createStackNavigator();

export default CourseNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Courses" 
                component={MyCoursesScreen} 
            />
            <Stack.Screen name="CourseDetailScreen" 
                component={CourseDetailScreen} 
            />
            <Stack.Screen name="LessonScreen" 
                component={LessonScreen} 
            />
        </Stack.Navigator>
    )
}