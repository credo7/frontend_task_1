import { Formik } from "formik";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Answer from "../components/Answer";
import Explonation from "../components/Explonation";
import Textfield from "../components/Textfield";
import fibCalculate from "../data/utils";
import CalculateButton from "../components/CalculateButton";

export default function FibonacciScreen() {
  const [req, setReq] = useState(null);
  const [res, setRes] = useState(null);

  return (
    <View style={styles.container}>
      <Explonation />
      <Formik
        initialValues={{ number: null }}
        onSubmit={(values) => {
          setReq(values.number);
          setRes(fibCalculate(values.number));
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <Textfield handleChange={handleChange} values={values} />
            <CalculateButton title="Рассчитать" handleSubmit={handleSubmit} />
          </View>
        )}
      </Formik>
      {res && req && <Answer>{`For n = ${req} answer is ${res}`}</Answer>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  input: {
    borderWidth: 1,
    margin: 12,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});
