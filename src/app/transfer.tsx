import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function transfer() {
  const [recipientName, setRecipientName] = useState("");
  const [recipientAccount, setRecipientAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Transfer Money</Text>
      <Text style={styles.subtitle}>Send money to another person.</Text>
      <Pressable style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceAmount}>Amount : $2450.00</Text>
      </Pressable>
      <View style={styles.card}>
        <Text style={styles.label}>Recipient Name :</Text>
        <TextInput
          value={recipientName}
          placeholder="Enter recipient's name"
          style={styles.input}
          onChangeText={setRecipientName}
        ></TextInput>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Recipient Account :</Text>
        <TextInput
          value={recipientAccount}
          placeholder="Enter account number"
          style={styles.input}
          onChangeText={setRecipientAccount}
        ></TextInput>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Transfer Amount (USD):</Text>
        <TextInput
          keyboardType="decimal-pad"
          value={amount}
          onChangeText={setAmount}
          placeholder="Enter amount"
          style={styles.input}
        ></TextInput>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          if (recipientName.trim() === "") {
            setError("Please enter recipient name.");
            setSuccess("");
          } else if (recipientAccount === "") {
            setError("Please enter account number.");
            setSuccess("");
          } else if (
            amount === "" ||
            !Number.isFinite(Number(amount)) ||
            Number(amount) <= 0 ||
            Number(amount) > 2450
          ) {
            setError("Please enter valid amount.");
            setSuccess("");
          } else {
            setError("");
            setSuccess("Transfer successful! (Demo only)");
          }
        }}
      >
        <Text style={styles.buttonText}>Send Money</Text>
      </Pressable>
      <Text style={styles.errorText}>{error}</Text>
      <Text style={styles.successText}>{success}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 24,
    backgroundColor: "#F5F7FB",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: "#64748B",
    marginBottom: 24,
  },

  balanceCard: {
    width: "100%",
    backgroundColor: "#2563EB",
    padding: 22,
    borderRadius: 20,
    marginBottom: 24,
    shadowColor: "#1D4ED8",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.16,
    shadowRadius: 10,
    elevation: 4,
  },

  balanceLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#DBEAFE",
    marginBottom: 10,
  },

  balanceAmount: {
    fontSize: 32,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 4,
  },

  input: {
    width: "100%",
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    marginTop: 8,
    fontSize: 15,
    color: "#0F172A",
  },

  button: {
    width: "100%",
    backgroundColor: "#2563EB",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    shadowColor: "#2563EB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 3,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  errorText: {
    color: "#DC2626",
    fontSize: 13,
    marginTop: 6,
  },

  successText: {
    color: "#15803D",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 12,
    textAlign: "center",
  },
});
