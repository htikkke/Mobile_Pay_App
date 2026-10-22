import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="transfer" options={{ title: "Transfer" }} />
      <Stack.Screen name="scan" options={{ title: "Scan" }} />
      <Stack.Screen name="fxrate" options={{ title: "Exchange Rate" }} />
      <Stack.Screen name="history" options={{ title: "History" }} />
    </Stack>
  );
}
