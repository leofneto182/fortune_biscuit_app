import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


function App() {

  let phrases = [
    "Do not be afraid of competition.",
    "An exciting opportunity lies ahead of you",
    "You love peace.",
    "Get your mind set…confidence will lead you on.",
    "You will always be surrounded by true friends.",
    "Sell your ideas-they have exceptional merit.",
    "You should be able to undertake and complete anything.",
    "You are kind and friendly.",
    "You are wise beyond your years.",
    "Your ability to juggle many tasks will take you far.",
    "A routine task will turn into an enchanting adventure.",
    "Beware of all enterprises that require new clothes.",
    "Be true to your work, your word, and your friend.",
    "Goodness is the only investment that never fails.",
    "A journey of a thousand miles begins with a single step.",
    "Forget injuries; never forget kindnesses.",
    "Respect yourself and others will respect you.",
    "A man cannot be comfortable without his own approval.",
    "Always do right. This will gratify some people and astonish the rest.",
    "It is easier to stay out than to get out.",
    "Sing everyday and chase the mean blues away.",
    "You will receive money from an unexpected source.",
    "Attitude is a little thing that makes a big difference.",
    "Plan for many pleasures ahead.",
    "Experience is the best teacher.",
    "You will be happy with your spouse.",
    "Expect the unexpected.",
    ];

  const [image, setImage] = useState(require("./src/biscuit.png"))
  const [phrase, setPhrase] = useState("")
  const [btnText, setBtnText] = useState("Break the Biscuit!")

  function breakBiscuit(){

    let sortedNumber = Math.floor(Math.random() * phrases.length)

    setBtnText("Break it again!")
    setPhrase('"' + phrases[sortedNumber] + '"');
    setImage(require("./src/openBiscuit.png"));
  }

  function resetBiscuit(){

    setBtnText("Break the Biscuit!")
    setPhrase("")
    setImage(require("./src/biscuit.png"))
  }

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
        {phrase}
      </Text>

      <TouchableOpacity style={[styles.button, {marginBottom: 15}]} onPress={breakBiscuit}>
        <View style={styles.buttonArea}>
          <Text style={styles.buttonText}>{btnText}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {borderColor: "#121212"}]} onPress={resetBiscuit}>
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