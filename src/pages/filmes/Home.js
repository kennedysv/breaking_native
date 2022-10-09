import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

import api from "../../services/api";

export default function Home() {
  let [name, setName] = useState("Walter White");
  let [nickname, setNickname] = useState("Mr White");
  let [foto, setFoto] = useState(
    "https://wp-content.bluebus.com.br/wp-content/uploads/2013/09/Breaking-Bad.jpg"
  );

  const image = {
    uri: "https://wp-content.bluebus.com.br/wp-content/uploads/2013/09/Breaking-Bad.jpg",
  };

  function getCharacter() {
    alert("Clicou no botão");
  }

  async function getCharacter() {
    let response = await api.get("/character/random");
    console.log(response.data);

    setName(response.data[0].name);
    setNickname(response.data[0].nickname);
    setFoto(response.data[0].img);
  }

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      blurRadius={8}
      style={styles.container}
    >
      <Image style={styles.imagem} source={{ uri: foto }} />

      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{nickname}</Text>

      <TouchableOpacity style={styles.button} onPress={getCharacter}>
        <Text style={styles.buttonText}>Sortear</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imagem: {
    borderRadius: 100,
    borderColor: "#016931",
    borderWidth: 5,
    marginBottom: 1,
    width: 200,
    height: 200,
  },

  background: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 20,
  },

  subtitle: {
    fontSize: 30,
    color: "#FFF",
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#016931",
    width: 150,
    height: 50,
    marginTop: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF",
  },
});
