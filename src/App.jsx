import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import products from "./data/products";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (sort === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} />

      <div className="controls">
        <SearchBar search={search} setSearch={setSearch} />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />
    </div>
  );
}

export default App;