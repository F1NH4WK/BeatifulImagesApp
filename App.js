import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, useWindowDimensions, FlatList } from 'react-native';
import { ModalProvider } from 'react-native-modalfy';
import { useState } from 'react';


export default function App() {

  const [image, setImage] = useState([Math.random() * 500])

  const {width, height} = useWindowDimensions();

  const generateImage = (item) => 
  <Image source={{uri: `https://picsum.photos/340/280?random=` + item}} 
  style = {{...styles.imageStyle, width: width-40}}/>

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style = {styles.textView}>
        <Text style = {styles.textHeader}>Beatiful Images</Text>
      </View>
      <View style = {styles.imageView}>
        <FlatList renderItem={(item) => generateImage(item.item)}
          data = {image}
          onEndReached = {() => setImage([...image, Math.random() * 500])}
          showsVerticalScrollIndicator = {false}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 20,
    flex: 1,
    backgroundColor: '#2c2d2f',
    alignItems: 'center',
  },

  textHeader: {
    color: '#27c6f1', 
    fontWeight: '800', 
    fontSize: 30,
    opacity: 0.9,
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 5,
    letterSpacing: 2.5
  },

  textView: {
    position: 'absolute',
    width: '100%', 
    height: '8%', 
    // backgroundColor: '#27c6f1', 
    marginBottom: 50,
    elevation: 100,
    shadowColor: '#27c6f1',
    shadowOpacity: 1,
    justifyContent: 'center',
  },

  imageView: {
    marginTop: '20%',
    flexDirection: 'column',
    height: '90%'
  },

  imageStyle: {
    height: 280, 
    borderWidth: 0.5,
    borderRadius: 15,
    marginBottom: 35,
    borderColor: '#27c6f1',
    opacity: 0.85,
  },
});
