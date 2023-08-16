import { createStackNavigator } from '@react-navigation/stack';

import AvailableCoursesScreen from '../screens/AvailableCoursesScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';

const Stack = createStackNavigator();

export default ExploreNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Courses" 
                component={AvailableCoursesScreen} 
            />
            <Stack.Screen name="CourseDetailScreen" 
                component={CourseDetailScreen} 
            />

        </Stack.Navigator>
    )
}