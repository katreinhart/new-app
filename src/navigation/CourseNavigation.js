import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyCoursesScreen from '../screens/MyCoursesScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import LessonScreen from '../screens/LessonScreen';

import { headerOptions } from '../styles';

const Stack = createNativeStackNavigator();

export default CourseNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Courses" 
                component={MyCoursesScreen} 
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