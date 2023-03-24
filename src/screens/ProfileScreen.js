import { View, Text, StatusBar, StyleSheet, Button } from 'react-native';

const ProfileScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
        <Text>✨ My Profile ✨</Text>
        <Text>Name: {route.params.name}</Text>
        <Text>Role: Lead Engineer</Text>
        
        <StatusBar style="auto" />
        <Button 
            title="Go Home"
            onPress={() => {
                navigation.navigate('Home')
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
  

export default ProfileScreen;