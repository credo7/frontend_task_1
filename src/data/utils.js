export default function fibCalculate(n) {
  if (n < 2) {
    return 1;
  } else {
    return fibCalculate(n - 2) + fibCalculate(n - 1);
  }
}
