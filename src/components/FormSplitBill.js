import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ friendName, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const friendExpense = bill ? bill - userExpense : "";

  function handleSplitBillSubmit(e) {
    e.preventDefault();

    if (!bill || !userExpense) return;

    onSplitBill(whoIsPaying === "user" ? friendExpense : -userExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplitBillSubmit}>
      <h2>Split a bill with {friendName}</h2>
      <label>💰 Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) =>
          setBill(Number(e.target.value) < 0 ? bill : Number(e.target.value))
        }
      />
      <label>🧍‍♂️ Your expense</label>
      <input
        type="number"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            Number(e.target.value) > bill ? userExpense : Number(e.target.value)
          )
        }
      />
      <label>🧍‍♀️ {friendName}'s expense</label>
      <input type="number" disabled value={friendExpense} />
      <label>💵 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{friendName}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
