import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
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
});

type BalanceCardProps = {
  label: string;
  balance: number;
  footer: string;
};

export default function BalanceCard({
  label,
  balance,
  footer,
}: BalanceCardProps) {
  return (
    <View style={styles.balanceCard}>
      <Text style={styles.balanceLabel}>{label}</Text>
      <Text style={styles.balance}>${balance}</Text>
      <Text style={styles.cardFooter}>{footer}</Text>
    </View>
  );
}
