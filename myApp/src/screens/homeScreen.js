// import React, { useState } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
// import { Card } from 'react-native-elements';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   // Sample alcohol products with images
//   const alcoholProducts = [
//     { id: '1', name: 'Whiskey', price: 25.99, image: require('./../assests/images/images.png') },
//     { id: '2', name: 'Vodka', price: 19.99, image: require('../assests/images/4983376.jpg') },
//     { id: '3', name: 'Wine', price: 14.99, image: require('../assests/images/jamesondibottle.png') },
//     // Add more products as needed
//   ];

//   const viewCart = () => {
//     navigation.navigate('CartScreen', { cart });
//   };

//   // State for the cart
//   const [cart, setCart] = useState([]);

//   // Function to handle adding a product to the cart
//   const addToCart = (product) => {
//     setCart([...cart, product]);
//     Alert.alert('Item added to cart', `${product.name} added to your cart!`);
//   };

//   // Render item for FlatList
//   const renderProduct = ({ item }) => (
//     <Card containerStyle={styles.productCard}>
//       <Image source={item.image} style={styles.productImage} />
//       <View style={styles.productInfo}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
//         <TouchableOpacity onPress={() => addToCart(item)} style={styles.addToCartButton}>
//           <Text style={styles.addToCartButtonText}>Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </Card>
//   );

//   const cartItemCount = cart.length > 0 ? cart.length : null;

//   return (
// <View style={styles.container}>
//       <Text style={styles.title}>Alcohol Shopping</Text>
//       <FlatList
//         data={alcoholProducts}
//         keyExtractor={(item) => item.id}
//         renderItem={renderProduct}
//         numColumns={2}
//       />
//        {/* <TouchableOpacity onPress={viewCart} style={styles.viewCartButton}>
//         <Text style={styles.viewCartButtonText}>View Cart</Text>
//       </TouchableOpacity> */}
//       {/* <TouchableOpacity onPress={viewCart} style={styles.viewCartButton}>
//         <Icon name="shopping-cart" size={20} color="white" />
//         {cart.length > 0 && <Text style={styles.cartItemCount}>{cart.length}</Text>}
//       </TouchableOpacity> */}
//        <TouchableOpacity onPress={viewCart} style={styles.viewCartButton}>
//         <Icon name="shopping-cart" size={20} color="white" />
//         {cartItemCount !== null && (
//           <View style={styles.cartItemCountContainer}>
//             <Text style={styles.cartItemCountText}>{cartItemCount}</Text>
//           </View>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   productCard: {
//     flex: 0.5, // Take half of the screen width`
//     marginBottom: 20,
//   },
//   productImage: {
//     height: 150,
//     resizeMode: 'cover',
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   productInfo: {
//     padding: 10,
//   },
//   productName: {
//     fontSize: 18,
//     marginBottom: 5,
//   },
//   productPrice: {
//     fontSize: 16,
//     color: 'green',
//     marginBottom: 10,
//   },
//   addToCartButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   addToCartButtonText: {
//     color: 'white',
//   },
//   cartContainer: {
//     marginTop: 20,
//   },
//   cartTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   cartItem: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   viewCartButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 20,
//   },       
//   viewCartButtonText: {
//     color: 'white',
//   },
//   cartItemCountContainer: {
//     backgroundColor: 'red',
//     borderRadius: 10,
//     marginLeft: 5,
//     paddingHorizontal: 5,
//     paddingVertical: 2,
//     position: 'absolute',
//     top: 0,
//     right: 0,
//   },
//   cartItemCountText: {
//     color: 'white',
//     fontSize: 12,
//   },
// });

// export default HomeScreen;


import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-reanimated-carousel';

const scale = 0.7;
const PAGE_WIDTH = window.width * scale;
const PAGE_HEIGHT = 240 * scale;

const AlcoholShoppingScreen = () => {
  const navigation = useNavigation();

  const alcoholProducts = [
    { id: '1', name: 'Whiskey', price: 25.99, image: require('./../assests/images/images.png') },
    { id: '2', name: 'Vodka', price: 19.99, image: require('../assests/images/4983376.jpg') },
    { id: '3', name: 'Wine', price: 14.99, image: require('../assests/images/jamesondibottle.png') },
    { id: '4', name: 'Whiskey', price: 25.99, image: require('./../assests/images/images.png') },
    { id: '5', name: 'Vodka', price: 19.99, image: require('../assests/images/4983376.jpg') },
    { id: '6', name: 'Wine', price: 14.99, image: require('../assests/images/jamesondibottle.png') },
    { id: '7', name: 'Whiskey', price: 25.99, image: require('./../assests/images/images.png') },
    { id: '8', name: 'Vodka', price: 19.99, image: require('../assests/images/4983376.jpg') },
    { id: '9', name: 'Wine', price: 14.99, image: require('../assests/images/jamesondibottle.png') },
    // Add more products as needed
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // If the item is already in the cart, update its quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    Alert.alert('Item added to cart', `${product.name} added to your cart!`);
  };

  const viewCart = () => {
    navigation.navigate('CartScreen', { cart });
  };

  const renderProduct = ({ item }) => (
    <Card containerStyle={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <View style={styles.addToCartContainer}>
          <TouchableOpacity onPress={() => addToCart(item)} style={styles.addToCartButton}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
          {item.quantity > 0 && (
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => addToCart(item)}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => addToCart(item)}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Card>
  );
  const alcoholImages = [
    {imagePath : require('../assests/images/C1.jpg')},
    {imagePath :require('../assests/images/C2.jpg')},
    {imagePath : require('../assests/images/C3.webp')},
    // Add more images as needed
  ];

  const renderCarouselItem = ({ item }) => (
    <Image source={item} style={styles.carouselImage} resizeMode="cover" />
  );


  return (
    <View style={styles.container}>

      <View
  //  contentContainerStyle={{
  //    flex: 1
  // }}
>
      <Carousel
                loop
                width={370}
                height={250}
                autoPlay={true}
                data={alcoholImages}
                modeConfig={{}}
                scrollAnimationDuration={2000}
                onSnapToItem={(item) => console.log('current index:', item)}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            // borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Image source = {item.imagePath} style= {styles.carouselImage}/>
                    </View>
                )}
            />
      {/* <Carousel layout={'tinder'} layoutCardOffset={50}
        data={alcoholImages}
        renderItem={renderCarouselItem}
        sliderWidth={380}
        itemWidth={300}
        // layout="default"
      /> */}
      <View>
      <FlatList
        data={alcoholProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        numColumns={2}
        // scrollEnabled={true}
      />
      </View>
      <View>
      {/* <FlatList
        data={alcoholProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        // numColumns={2}
        horizontal = {true}
      /> */}
      </View>
      
          <TouchableOpacity onPress={viewCart} style={styles.viewCartButton}>
        <Icon name="shopping-cart" size={20} color="white" />
        {cart.length > 0 && (
          <View style={styles.cartItemCountContainer}>
            <Text style={styles.cartItemCountText}>{cart.length}</Text>
          </View>
        )}
      </TouchableOpacity>
      </View>

    </View>
     );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productCard: {
    flex: 0.5,
    marginBottom: 20,
  },
  productImage: {
    height: 150,
    width: '100%',
    resizeMode: 'cover',
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 18,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
    marginBottom: 10,
  },
  addToCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  addToCartButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    marginLeft: 10,
  },
  quantity: {
    paddingHorizontal: 15,
    fontWeight: 'bold',
  },
  viewCartButton: {
    position: 'absolute',
    // top: 20,
    // right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cartItemCountContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    marginLeft: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  cartItemCountText: {
    color: 'white',
    fontSize: 12,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    // borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
  },
});

export default AlcoholShoppingScreen;
