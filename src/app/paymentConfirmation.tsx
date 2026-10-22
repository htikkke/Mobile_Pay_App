import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function paymentConfirmation() {
  const { scannedData } = useLocalSearchParams();
  const [amount, setAmount] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Confirmation</Text>
      <Text style={styles.subtitle}>
        Review the payment details before confirming.
      </Text>
      {scannedData ? (
        <View style={styles.card}>
          <Text style={styles.label}>QR Code Data</Text>
          <Text style={styles.qrData}>{scannedData}</Text>
        </View>
      ) : (
        <Text>No QR data received!</Text>
      )}

      <Text style={styles.label}>Amount (MMK)</Text>
      <TextInput
        style={styles.input}
        value={amount}
        placeholder="Enter amount"
        onChangeText={(amount) => {
          setAmount(amount);
          setConfirmed(false);
        }}
        keyboardType="numeric"
      />

      <Pressable
        style={styles.confirmButton}
        onPress={() => {
          if (
            amount.trim() === "" ||
            Number(amount) <= 0 ||
            !Number.isFinite(Number(amount))
          ) {
            setConfirmed(false);
          } else {
            setConfirmed(true);
          }
        }}
      >
        <Text style={styles.confirmButtonText}>Confirm Payment</Text>
      </Pressable>

      {confirmed && (
        <Text style={styles.successMessage}>Payment details confirmed!</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#172B4D",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#667085",
    marginBottom: 28,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#E8ECF3",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#667085",
    marginBottom: 10,
  },
  qrData: {
    fontSize: 16,
    fontWeight: "600",
    color: "#172B4D",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D9E0EB",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontSize: 18,
    color: "#172B4D",
    marginBottom: 12,
  },
  confirmButton: {
    backgroundColor: "#1769FF",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 12,
  },
  confirmButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  successMessage: {
    color: "#16803D",
    backgroundColor: "#E8F8EE",
    padding: 14,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "600",
    marginTop: 16,
    overflow: "hidden",
  },
  errorMessage: {
    color: "#C62828",
    fontSize: 14,
    marginBottom: 8,
  },
});
