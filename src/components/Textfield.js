import { TextInput } from "react-native";
import { StyleSheet } from "react-native";

export default function ({ handleChange, values }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Число"
      keyboardType="number-pad"
      onChangeText={handleChange("number")}
      value={values.number}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 12,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});
