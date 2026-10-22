import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ScanScreen() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState<string | null>(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan QR Code</Text>
      <Text style={styles.description}>Scan a QR code to make a payment.</Text>
      {permission === null ? (
        <Text>Checking camera permission...</Text>
      ) : permission.granted ? (
        <CameraView
          style={styles.camera}
          facing="back"
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
          onBarcodeScanned={
            scannedData ? undefined : ({ data }) => setScannedData(data)
          }
        />
      ) : (
        <Pressable style={styles.permissionButton} onPress={requestPermission}>
          <Text style={styles.permissionButtonText}>
            Ask for camera permission
          </Text>
        </Pressable>
      )}
      {scannedData ? (
        <View>
          <Text
            onPress={() =>
              router.push({
                pathname: "/paymentConfirmation",
                params: {
                  scannedData,
                },
              })
            }
          >
            {scannedData}
          </Text>
          <Pressable
            onPress={() => setScannedData(null)}
            style={styles.permissionButton}
          >
            Scan again
          </Pressable>
        </View>
      ) : (
        <Text>Point your camera at QR code!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 24,
    paddingTop: 32,
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 8,
    textAlign: "center",
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 28,
    maxWidth: 280,
  },

  camera: {
    width: "100%",
    height: 380,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#0F172A",
  },
  permissionButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 16,
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },

  permissionButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
