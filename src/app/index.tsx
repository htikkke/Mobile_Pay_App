import ActionButton from "@/components/ActionButton";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>YPay</Text>
        <Text style={styles.greeting}>Welcome back 👋</Text>
      </View>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balance}>$2,450.00</Text>
        <Text style={styles.cardFooter}>Your wallet balance</Text>
      </View>
      <View style={styles.actions}>
        <ActionButton label="Transfer" icon="↔" onPress={() => {}} />
        <ActionButton label="Scan" icon="▦" onPress={() => {}} />
        <ActionButton label="Fx Rate" icon="⇄" onPress={() => {}} />
        <ActionButton label="History" icon="◷" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 24,
  },
  header: {
    marginTop: 16,
    marginBottom: 28,
  },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2563EB",
  },
  greeting: {
    fontSize: 16,
    color: "#64748B",
    marginTop: 8,
  },
  balanceCard: {
    backgroundColor: "#2563EB",
    borderRadius: 24,
    padding: 24,
  },
  balanceLabel: {
    color: "#DBEAFE",
    fontSize: 16,
  },
  balance: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "bold",
    marginVertical: 16,
  },
  cardFooter: {
    color: "#DBEAFE",
    fontSize: 14,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },

  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    width: "23%",
    minHeight: 90,
  },

  actionIcon: {
    fontSize: 26,
    color: "#2563EB",
  },

  actionLabel: {
    fontSize: 12,
    color: "#334155",
    marginTop: 8,
  },
});
