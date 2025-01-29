import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setResult("Inserisci numeri validi");
      return;
    }
    
    switch (operation) {
      case "add":
        setResult(n1 + n2);
        break;
      case "subtract":
        setResult(n1 - n2);
        break;
      case "multiply":
        setResult(n1 * n2);
        break;
      case "divide":
        setResult(n2 !== 0 ? n1 / n2 : "Errore: divisione per zero");
        break;
      default:
        setResult(null);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 max-w-3xl mx-auto bg-white text-black justify-center rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold">Calcolatrice</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Numero 1" />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Numero 2" />
      <div className="flex gap-2">
        <button onClick={() => calculate("add")} className="bg-blue-500">+</button>
        <button onClick={() => calculate("subtract")} className="bg-red-500">-</button>
        <button onClick={() => calculate("multiply")} className="bg-green-500">*</button>
        <button onClick={() => calculate("divide")} className="bg-yellow-500">/</button>
      </div>
      {result !== null && <div className="font-semibold text-2xl">Risultato: {result}</div>}
    </div>
  );
}
