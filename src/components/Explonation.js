import { Text } from "react-native";

export default function Explonation() {
  return (
    <Text>
      Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 +
      Fn-2.${"\n\n"}
      То есть, следующее число получается как сумма двух предыдущих. ${"\n\n"}
      Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее:
      1, 1, 2, 3, 5, 8, 13, 21....
    </Text>
  );
}
