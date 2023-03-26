import { View, Text, StatusBar, StyleSheet, Button } from 'react-native';
import { gql, useQuery } from '@apollo/client';

const ME = gql`
    query Me {
        me {
            firstName
            lastName
        }
    }
`;

const ProfileScreen = ({navigation, route}) => {
  const { loading, error, data } = useQuery(ME);

    if (loading) return <Text>Loading...</Text> 
    if (error) return <Text>Error: { error.message }</Text>

    return (
        <View style={styles.container}>
        <Text>✨ My Profile ✨</Text>
        <Text>Name: {data.me.firstName} {data.me.lastName}</Text>
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