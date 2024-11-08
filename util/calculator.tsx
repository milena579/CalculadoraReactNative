export const initialState = { current: "", previous: "", operator: "" };
  
  export const handleNumber = (value: any, state: { currentValue: string; }) => {
    if (state.currentValue === "0") {
      return { currentValue: `${value}` };
    }
  
    return {
      currentValue: `${state.currentValue}${value}`
    };
  };

// Exemplo de utilitário calculator.ts

export const calculator = (previous: string, current: string, operator: string) => {
  const prev = parseFloat(previous);
  const curr = parseFloat(current);

  switch (operator) {
    case "+":
      return prev + curr;
    case "-":
      return prev - curr;
    case "*":
      return prev * curr;
    case "/":
      return prev / curr;
    default:
      return curr;
  }
};
  
export default calculator;
  