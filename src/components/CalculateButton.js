import { Button } from "@rneui/base";

export default function CalculateButton({ title, handleSubmit }) {
  return (
    <Button onPress={handleSubmit}>
      {title}
    </Button>
  );
}
