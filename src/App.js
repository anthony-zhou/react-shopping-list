import './App.css';
import { useState } from 'react';

function App() {
  const [shoppingItems, setShoppingItems] = useState([
    { text: '5 eggs', done: false },
    { text: '1 heirloom tomato', done: false },
    { text: '1 gallon of milk', done: false }
  ])

  const toggleDone = (index) => {
    const newItems = [...shoppingItems];
    newItems[index].done = !newItems[index].done;
    setShoppingItems(newItems)
  }

  return (
    <div className="App">
      <h1 style={{ color: "MediumSlateBlue" }}>My shopping list</h1>
      <ul style={{ width: 500, margin: "auto", textAlign: "left", listStyleType: "none" }}>
        {shoppingItems.sort((a, b) => a.done - b.done).map((item, index) =>
          <ShoppingItem
            text={item.text}
            done={item.done}
            toggleDone={() => toggleDone(index)}
          />)}
      </ul>
    </div>
  );
}

function ShoppingItem(props) {
  return (<li style={{ marginTop: 10 }}>
    <div style={{
      display: "inline-block", width: 20, height: 20, marginBottom: -5, marginRight: 5, borderRadius: "50%", border: "2px solid MediumSlateBlue",
      background: props.done ? "MediumSlateBlue" : "none"
    }}
      onClick={props.toggleDone}
    />
    { props.done ? <strike>{props.text}</strike> : props.text}
  </li>)
}

export default App;
