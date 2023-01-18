import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 0, 1),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2023, 0, 2) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 0, 3),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2023, 0, 4),
    },
  ]; // 여러 개의 비용 아이템이 들어있는 배열
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
