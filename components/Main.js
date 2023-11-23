import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { gStyle } from "../styles/style";
import Form from "./Form";

export default function Main({ navigation }) {
  const [modalWindow, setModalWindow] = useState(false);
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google!!!",
      full: "Google is cool",
      key: "1",
      img: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
    },
    {
      name: "Apple",
      anons: "Apple!!!",
      full: "Apple is cool",
      key: "2",
      img: "https://media.licdn.com/dms/image/D4D12AQHwi4jdRd3fQQ/article-cover_image-shrink_600_2000/0/1685279753620?e=2147483647&v=beta&t=7I-pJ0kDQfNl4w-0Ue8aPyol_X-aWOQlzp18NhTldys",
    },
    {
      name: "Samsung",
      anons: "Samsung!!!",
      full: "Samsung is cool",
      key: "3",
      img: "https://images.samsung.com/is/image/samsung/assets/ru/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$",
    },
  ]);

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      return [article, ...list];
    });
    setModalWindow(false);
  };
  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <Ionicons
          name="close-circle"
          size={34}
          color="red"
          style={styles.iconClose}
          onPress={() => setModalWindow(false)}
        />
        <View>
          <Text style={styles.title}>Add title</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons
        name="add-circle"
        size={34}
        color="black"
        style={styles.iconAdd}
        onPress={() => setModalWindow(true)}
      />
      <Text style={[gStyle.title, styles.header]}>Main Page</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image
              style={styles.image}
              source={{
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 10,
    color: "#474747",
  },
  anons: {
    fontSize: 14,
    textAlign: "center",
    color: "grey",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  iconAdd: {
    textAlign: "center",
    marginBottom: 15,
  },
  iconClose: {
    textAlign: "center",
    marginTop: 10,
  },
});
