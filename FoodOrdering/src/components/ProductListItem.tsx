import { Text, View, StyleSheet, Image } from 'react-native';
import Colors from '@/src/constants/Colors';
import { Product } from '../types';

// Fallback image for type safe components
export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
  product: Product;
}

// const product = products[0];

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.image || defaultPizzaImage}} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%'
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
    resizeMode: 'contain'
  }
});

export default ProductListItem;