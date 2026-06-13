function Navbar({ cartCount }) {
  return (
    <nav>
      <h2>My Store</h2>
      <h3>Cart: {cartCount}</h3>
    </nav>
  );
}

export default Navbar;