import { FlatList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  header: {
    color: "#0F172A",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
  },

  transactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  transactionInfo: {
    flex: 1,
    marginRight: 12,
  },

  transactionName: {
    color: "#0F172A",
    fontSize: 15,
    fontWeight: "600",
  },

  transactionDate: {
    color: "#94A3B8",
    fontSize: 12,
    marginTop: 5,
  },

  transactionAmount: {
    fontSize: 15,
    fontWeight: "700",
  },

  expense: {
    color: "#EF4444",
  },

  income: {
    color: "#16A34A",
  },
});

const data = [
  { id: "1", name: "Coffee Shop", date: "Oct 16", amount: -100 },
  { id: "2", name: "Online Shopping", date: "Oct 15", amount: 32.0 },
  { id: "3", name: "Salary", date: "Oct 14", amount: 850.0 },
];

export default function Transactions() {
  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={<Text>No transactions yet.</Text>}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionRow}>
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionName}>{item.name}</Text>
              <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
            <Text
              style={[
                styles.transactionAmount,
                item.amount < 0 ? styles.expense : styles.income,
              ]}
            >
              {item.amount < 0 ? "-$" : "+$"}
              {Math.abs(item.amount).toFixed(2)}
            </Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
