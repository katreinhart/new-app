import { Image, Text, TouchableOpacity } from 'react-native';

export default QuoteCard = ({text, attribution, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.quoteCard}>
            <Text style={styles.quoteText}>{text}</Text>
            <Text style={styles.quoteAttribution}>{attribution}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    quoteCard: {
        minHeight: 40,
        width: 325,
        margin: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quoteText: {
        alignItems: 'center',
        color: "#333",
        fontSize: 24,
        fontWeight: '600',
        paddingTop: 6,
    },
    quoteAttribution: {
        color: "#333",
        fontSize: 18,
        fontWeight: 400,
        paddingBottom: 4
    },
}