import Nav from './components/nav'
import Table from './components/table'
import './App.css'
import { useState } from 'react'

//
function App() {
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]

  console.log(PRODUCTS)

  return (
    <div>
      <Nav className="nav" />
      <Table />
    </div>);
}

export default App;

