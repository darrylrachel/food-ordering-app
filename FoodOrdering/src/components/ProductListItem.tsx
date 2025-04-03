import { Text, View, StyleSheet, Image } from 'react-native';
import Colors from '@/src/constants/Colors';

// const product = products[0];

const ProductListItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.image}} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10
  },
  
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold'
  },

  image: {
    width: '100%',
    aspectRatio: 1,
  }
});

export default ProductListItem;