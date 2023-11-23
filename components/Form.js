import React from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
import { Formik } from "formik";

export default function Form({ addArticle }) {
  return (
    <View>
      <Formik
        initialValues={{ name: "", anons: "", full: "", img: "" }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.name}
              placeholder="Enter the name"
              onChangeText={props.handleChange("name")}
            />
            <TextInput
              style={styles.input}
              value={props.values.anons}
              multiline
              placeholder="Enter the anons"
              onChangeText={props.handleChange("anons")}
            />
            <TextInput
              style={styles.input}
              value={props.values.full}
              multiline
              placeholder="Enter the full"
              onChangeText={props.handleChange("full")}
            />
            <TextInput
              style={styles.input}
              value={props.values.img}
              placeholder="Enter the img"
              onChangeText={props.handleChange("img")}
            />
            <Button title="Add" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 5,
    padding: 10,
    borderColor: "silver",
    borderRadius: 5,
  },
});
