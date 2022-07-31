import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import { ModalProvider } from 'react-native-modalfy';
import { useState } from 'react';



export default function App() {

  const [image, setImage] = useState([1, 2, 3, 4])

  const {width, height} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {console.log(width)}

      <View style = {{width: '100%', height: '6%', backgroundColor: '#27c6f1', marginBottom: 50}}>
        <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 30}}>Beatiful Images</Text>
      </View>
      <View style = {styles.imageView}>
        {image.map(i => <Image source={{uri: `https://picsum.photos/360/250?random=` + i}} 
        style = {{width: width-30, height: 250, borderWidth: 2, borderRadius: 15,
        shadowOffset: {
          width: 2,
          height: 3,
        }, shadowColor: 'red', shadowRadius: 20, shadowOpacity: 1}}/> )}
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

  imageView: {


  }
});
