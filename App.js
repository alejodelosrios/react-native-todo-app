import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import SandBox from "./components/SandBox";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy a coffe", key: "1" },
    { text: "Create an app", key: "2" },
    { text: "Play on the  switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const addTodos = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [...prevTodos, { text: text, key: Math.random().toString() }];
      });
    } else {
      Alert.alert("OOPs!", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    //<SandBox />
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addTodos={addTodos} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem todo={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  list: {
    flex: 1,
    marginTop: 30,
  },
});
