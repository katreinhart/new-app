import { View, Text, StatusBar } from 'react-native';
import styles from '../styles';

import Button from '../components/Button'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>✨ Hello World! ✨</Text>
        
        <Button 
            title="Profile"
            onPress={() => {
                navigation.navigate('Profile')
            }} />
        <Button 
            title="Courses"
            onPress={() => {
                navigation.navigate('Courses')
            }} />
        <Button 
            title="Authors"
            onPress={() => {
                navigation.navigate('Authors')
            }} />
      </View>
    )
}
  

export default HomeScreen;