import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function paymentConfirmation() {
  const { scannedData } = useLocalSearchParams();
  const [amount, setAmount] = useState("");

  return (
    <View>
      <Text>Payment Confirmation</Text>
      {scannedData ? (
        <Text>Scanned Data : {scannedData}</Text>
      ) : (
        <Text>No QR data received!</Text>
      )}
      <TextInput
        value={amount}
        placeholder="Enter Amount"
        onChangeText={setAmount}
        keyboardType="numeric"
      ></TextInput>
      {amount.trim() === "" || !Number.isFinite(Number(amount)) ? (
        <Text>Please enter an amount</Text>
      ) : Number(amount) <= 0 ? (
        <Text>Please enter a valid amount</Text>
      ) : (
        <Text>{amount}</Text>
      )}
      <Pressable>Confirm</Pressable>
    </View>
  );
}
