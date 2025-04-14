import React, { useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import ItemForm from "./components/ItemForm";
import ShoppingList from "./components/ShoppingList";
import itemsData from "./data/items";
import "./App.css";

function App() {
  const [items, setItems] = useState(itemsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const itemsToDisplay = items
    .filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter((item) =>
      selectedCategory === "All" ? true : item.category === selectedCategory
    );

  return (
    <div className="App">
      <Header />
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchText={searchText}
        onSearchChange={setSearchText}
      />
      <ShoppingList items={itemsToDisplay} />
    </div>
  );
}

export default App;
