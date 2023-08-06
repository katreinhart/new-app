import Carousel from 'react-native-snap-carousel';
import { View, Image, Text } from 'react-native';
import { StyleSheet } from 'react-native';

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
        <View style={styles.carousel}>
            <Text style={styles.text}>You might enjoy...</Text>
            <Carousel
                layout={'default'}
                data={data}
                renderItem={renderItem}
                sliderWidth={330}
                itemWidth={100}
                loop={true}
            />
      </View>
    );
  };
  
const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    marginTop: 20,
    width: '100%',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  text: {
    color: "#333",
    fontWeight: '600',
    fontSize: 20,
  }
});