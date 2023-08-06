import { Image, Text, TouchableOpacity } from 'react-native';

export default Card = ({title, image, subtext, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Text style={styles.cardSubtext}>{subtext}</Text>
            <Image
                style={styles.cardImage}
                source={image}
            />
            <Text style={styles.cardText}>{title}</Text>

        </TouchableOpacity>
    )
}

const styles = {
    card: {
        minHeight: 40,
        width: 325,
        margin: 12
    },
    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    cardText: {
        color: "#333",
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 6,
    },
    cardSubtext: {
        color: "#666",
        fontSize: 12,
        fontWeight: 300,
        paddingBottom: 4
    },
}