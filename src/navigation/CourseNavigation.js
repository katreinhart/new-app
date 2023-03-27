import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CoursesScreen from '../screens/CoursesScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';

import { headerOptions } from '../styles';

const Stack = createNativeStackNavigator();

export default CourseNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Courses" component={CoursesScreen} options={headerOptions}/>
            <Stack.Screen name="CourseDetailScreen" component={CourseDetailScreen} options={headerOptions} />
        </Stack.Navigator>
    )
}