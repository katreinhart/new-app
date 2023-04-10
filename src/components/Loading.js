import { View, Text, ActivityIndicator } from 'react-native';

import styles from '../styles';

export default Loading = () => (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#fca" />
    </View>
);

