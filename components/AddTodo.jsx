import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddTodo({ addTodos }) {
  const [text, setText] = useState("");
  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={changeHandler}
        placeholder="New todo..."
      />
      <Button title="Add todo" color="coral" onPress={() => addTodos(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 30,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
