import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ todo, pressHandler }) {
  return (
    <View style={styles.todo}>
      <Text style={styles.text}>{todo.text}</Text>
      <TouchableOpacity onPress={() => pressHandler(todo.key)}>
        <MaterialIcons name="delete" size={20} color="coral" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    padding: 16,
    fontSize: 16,
    color: "green",
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  text: {
    flex: 1,
    fontSize: 20,
  },
});
