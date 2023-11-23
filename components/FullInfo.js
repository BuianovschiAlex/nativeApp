import { View, Text, Image, StyleSheet } from "react-native";
import { gStyle } from "../styles/style";

export default function FullInfo({ route }) {
  return (
    <View style={gStyle.main}>
      <Image
        style={styles.image}
        source={{
          uri: route.params.img,
        }}
      />
      <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    marginTop: 25,
  },
  full: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "red",
  },
  image: {
    width: "100%",
    height: 200,
  },
});
