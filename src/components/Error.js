import { View, Text } from 'react-native';

import styles from '../styles';

export default ErrorComponent = ({message}) => (
    <View style={styles.container}>
        <Text style={styles.headerText}>Error: { message }</Text>
    </View>
);

