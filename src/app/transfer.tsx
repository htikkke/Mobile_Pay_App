import { StyleSheet, Text, View } from "react-native";

export default function transfer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transfer Money</Text>
      <Text>Send money to another person.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2563EB",
    marginBottom: 12,
  },
});
