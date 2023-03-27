import { Image, Text, TouchableOpacity } from 'react-native';

import styles from '../styles';

export default Card = ({title, image, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Image
                style={styles.cardImage}
                source={{
                    uri: image
                }}
            />
            <Text style={styles.cardText}>{title}</Text>

        </TouchableOpacity>
    )
}