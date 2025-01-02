import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


function App() {

  const [image, setImage] = useState(require("./src/biscuit.png"))

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Fortune's Biscuit's Game
      </Text>

      <Image 
      source={image} 
      style={styles.image}
      />

      <Text style={styles.phrase}>
        Frase
      </Text>

      <TouchableOpacity style={[styles.button, {marginBottom: 15}]} onPress={() => {}}>
        <View style={styles.buttonArea}>
          <Text style={styles.buttonText}>Break Biscuit</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {borderColor: "#121212"}]} onPress={() => {}}>
        <View style={styles.buttonArea}>
          <Text style={[styles.buttonText, {color: "#121212"}]}>Reset Biscuit</Text>
        </View>
      </TouchableOpacity>
    </View>
    



  );
}

let styles = StyleSheet.create({

  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title:{
    fontSize:30,
    color: "#dd7b22",
    fontWeight: "bold",
    marginBottom: 30,
  },
  image:{
    width: 230,
    height: 230
  },
  phrase:{
    fontSize: 20,
    color: "#dd7b22",
    fontStyle: 'italic',
    margin: 30,
  },

  button:{
    borderColor: "#dd7b22",
    height: 50,
    width: 230,
    borderWidth: 2,
    borderRadius: 25
  },

  buttonArea:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"  
  },

  buttonText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: "#dd7b22",

  }  


})

export default App;