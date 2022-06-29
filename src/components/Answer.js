import { Text } from "react-native";

export default function Answer(props) {
  return (
    <Text
      style={{
        textAlign: "center",
        fontSize: 16,
        padding: 12,
        marginTop: 12,
        backgroundColor: "black",
        color: "white",
      }}
    >
      {props.children}
    </Text>
  );
}
