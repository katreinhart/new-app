import { View, Button } from 'react-native';
import { Video } from 'react-native-video';

import styles from '../styles';

const VideoPlayer = ({ videoURL }) => {
    return (
        <View>
            {/* <Video
                source={{ uri: videoURL }}
                ref={(ref) => {
                    this.player = ref
                  }}                                      // Store reference
                  onBuffer={this.onBuffer}                // Callback when remote video is buffering
                  onError={this.videoError}               // Callback when video cannot be loaded
                  style={styles.backgroundVideo} 
            /> */}

            

            <Button title="Play/Pause" />
            <Button title="Fullscreen" />
            <Button title="Mute" />
            <Button title="Close" />
        </View>
    )
}

export default VideoPlayer;
