import { StyleSheet, Text, View } from "react-native";

export default function fxrate() {
  const currencies = [
    { id: 1, code: "USD", rate: 3500, name: "US Dollar" },
    { id: 2, code: "THB", rate: 200, name: "Thai Baht" },
    { id: 3, code: "SGD", rate: 3000, name: "Singapore Dollar" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exchange Rates</Text>
      {currencies.map((currency) => {
        return (
          <View style={styles.rateCard} key={currency.id}>
            <Text style={styles.currency}>{currency.name} → MMK</Text>
            <Text style={styles.rate}>
              1 {currency.code} = {currency.rate.toLocaleString()} MMK
            </Text>
          </View>
        );
      })}

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
    marginBottom: 24,
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
