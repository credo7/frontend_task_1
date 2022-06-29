import { Button } from "@rneui/base";

export default function HomeScreen ({ navigation }) {
  return (
    <Button
      title="Расчет чисел Fibonacci :)"
      onPress={() => navigation.navigate("Fibonacci")}
    />
  );
}
