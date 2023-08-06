import Carousel from 'react-native-snap-carousel';
import { View, Image, Text } from 'react-native';
import styles from '../styles';


export default CarouselComponent = ({data}) => {
    const renderItem = ({ item }) => {
      return (
        <View style={styles.slide}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      );
    };
  
    return (
        <View>
            <Text style={styles.cardText}>hello</Text>
            <Carousel
                layout={'default'}
                data={data}
                renderItem={renderItem}
                sliderWidth={300}
                itemWidth={100}
                loop={true}
            />
      </View>
    );
  };
  