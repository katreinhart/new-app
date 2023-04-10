import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CoursesScreen from '../screens/CoursesScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import LessonScreen from '../screens/LessonScreen';

import { headerOptions } from '../styles';

const Stack = createNativeStackNavigator();

export default CourseNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Courses" 
                component={CoursesScreen} 
                options={{
                    ...headerOptions,
                    title: "Courses"
                }}/>
            <Stack.Screen name="CourseDetailScreen" 
                component={CourseDetailScreen} 
                options={{
                    ...headerOptions,
                    title: "Course Detail"
                }}/>
            <Stack.Screen name="LessonScreen" 
                component={LessonScreen} 
                options={{
                    ...headerOptions,
                    title: "Lesson"
                }} />
        </Stack.Navigator>
    )
}