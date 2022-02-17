import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    paddingTop: 48,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});
