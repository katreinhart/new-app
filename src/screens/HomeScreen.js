import { View, Text, StatusBar, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Text>Hello World! ✨</Text>
        <StatusBar style="auto" />
        

        <Button 
            title="Go to Profile"
            onPress={() => {
                navigation.navigate('Profile', { name: "Kat" })
            }} />
        <Button 
            title="Go to Courses"
            onPress={() => {
                navigation.navigate('Courses')
            }} />
        <Button 
            title="Go to Authors"
            onPress={() => {
                navigation.navigate('Authors')
            }} />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default HomeScreen;