import { View, Button } from 'react-native';
import { Video } from 'expo-av';

import styles from '../styles';

import video from '../../assets/pexels-pixabay-1-1280x720-30fps.mp4'

const VideoPlayer = ({ videoURL }) => {
    return (
        <View style={styles.container}>
            <Video 
                useNativeControls
                source={video} 
                paused={false}
                repeat={true}
                style={styles.video} 
            />

            <Button title="Play/Pause" />
            <Button title="Fullscreen" />
            <Button title="Mute" />
            <Button title="Close" />
        </View>
    )
}

export default VideoPlayer;
