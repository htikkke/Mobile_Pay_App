import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
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
type ActionButtonProps = {
  label: string;
  icon: string;
  onPress: () => void;
};
export default function ActionButton({
  label,
  icon,
  onPress,
}: ActionButtonProps) {
  return (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      <Text style={styles.actionIcon}>{icon}</Text>
      <Text style={styles.actionLabel}>{label}</Text>
    </TouchableOpacity>
  );
}
