import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      ) : (
        <h2>No Products Found</h2>
      )}
    </div>
  );
}

export default ProductList;