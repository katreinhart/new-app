import React from 'react';
import { View, Text } from 'react-native';

export default Header = ({text}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{text}</Text>
            <Text style={styles.headerSubtext}>Saturday, August 7, 2023</Text>
        </View>
    )
}

const styles = {
    headerText: {
        flex: 0.2,
        color: "#013",
        fontSize: 28,
        fontWeight: 600,
        marginTop: 50,
        paddingBottom: 40,
    },
    headerSubtext: {
        color: "#013",
        fontSize: 16,
        fontWeight: 400,
        paddingBottom: 10,
    },
    header: {
        padding: 30,
        borderBottomWidth: 1,
        borderColor: '#fff',
        width: '100%',
        height: 160,
    },
}