import { FlatList, StyleSheet, Text, View } from "react-native";

const transactions = [
  { id: "1", name: "Coffee Shop", date: "Oct 16", amount: -5.5 },
  { id: "2", name: "Online Shopping", date: "Oct 15", amount: -32 },
  { id: "3", name: "Salary", date: "Oct 14", amount: 850 },
];

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>

            <Text
              style={[
                styles.amount,
                { color: item.amount < 0 ? "#EF4444" : "#16A34A" },
              ]}
            >
              {item.amount < 0 ? "-$" : "+$"}
              {Math.abs(item.amount).toFixed(2)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8FAFC",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0F172A",
  },
  date: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 5,
  },
  amount: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
