import ActionButton from "@/components/ActionButton";
import BalanceCard from "@/components/BalanceCard";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>YPay</Text>
        <Text style={styles.greeting}>Welcome back 👋</Text>
      </View>
      <BalanceCard
        label="Total Balance"
        balance={2450.0}
        footer="Your Wallet balance"
      />
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
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
});
