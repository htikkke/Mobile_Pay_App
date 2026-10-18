import { StyleSheet, Text, View } from "react-native";

export default function fxrate() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exchange Rates</Text>

      <View style={styles.rateCard}>
        <Text style={styles.currency}>USD → MMK</Text>
        <Text style={styles.rate}>1 USD = -- MMK</Text>
      </View>

      <Text style={styles.note}>Exchange rates will be added later.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F8FAFC",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 24,
  },
  rateCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  currency: {
    fontSize: 16,
    color: "#64748B",
    marginBottom: 12,
  },
  rate: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2563EB",
  },
  note: {
    marginTop: 16,
    color: "#64748B",
    fontSize: 14,
  },
});
