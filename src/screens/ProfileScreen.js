import { View, Text, StatusBar, StyleSheet, Button } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import styles from '../styles';

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
        <Text style={styles.title}>✨ My Profile ✨</Text>
        <Text style={styles.listItem}>Name: {data.me.firstName} {data.me.lastName}</Text>
        <Text style={styles.listItem}>Role: Lead Engineer</Text>
        
        <StatusBar style="auto" />
        <Button 
            title="Go Home"
            onPress={() => {
                navigation.navigate('Home')
            }} />
      </View>
    )
}

export default ProfileScreen;