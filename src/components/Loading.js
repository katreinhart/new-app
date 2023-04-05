import { View, Text } from 'react-native';

import styles from '../styles';

export default Loading = () => (
    <View style={styles.container}>
        <Text style={styles.headerText}>Loading, one moment...</Text>
    </View>
);

