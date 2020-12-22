function calculate(n1, operador, n3) {
  let operation;
  switch (operador) {
    case "+":
      operation = n1 + n3;
      break;
    case "-":
      operation = n1 - n3;
      break;
    case "*":
      operation = n1 * n3;
      break;
    case "/":
      if (n3 === 0) {
        operation = null;
      } else {
        operation = n1 / n3;
      }
      break;
    default:
      operation = null;
  }
  return operation;
}
document.write(`${calculate(2, "l", 5)}`);
