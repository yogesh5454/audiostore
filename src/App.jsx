import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 299.99,
      description: "High-quality wireless headphones with noise cancellation",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      features: [
        "Active Noise Cancellation",
        "40h Battery Life",
        "Premium Sound Quality",
        "Bluetooth 5.0",
      ],
    },
    {
      id: 2,
      name: "Wireless Speaker",
      price: 199.99,
      description: "Portable Bluetooth speaker with deep bass",
      image:
        "https://imgs.search.brave.com/56xzRPYT2CE51faimcaNm9yjBa-7yvvD04-_EtGqCzo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvNjI5/MDQ5MTMvc3RvY2st/cGhvdG8tY29tcHV0/ZXItc3BlYWtlcnM.jpeg",
      features: ["360° Sound", "IPX7 Waterproof", "20h Playtime", "Party Mode"],
    },
    {
      id: 3,
      name: "Noise-Canceling Earbuds",
      price: 149.99,
      description: "True wireless earbuds with active noise cancellation",
      image:
        "https://imgs.search.brave.com/yz4VCtNMJRizvG6YKJACPsv73BqgrGtBQ2ZMyktIdWg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFsMnFnWUFqb0wu/anBn",
      features: [
        "Active Noise Cancellation",
        "Bluetooth 5.0",
        "Touch Control",
        "24h Playtime",
      ],
    },
    {
      id: 4,
      name: "Studio Monitor Speakers",
      price: 799.99,
      description: "Professional studio monitor speakers for audiophiles",
      image:
        "https://imgs.search.brave.com/lCjCTMtPBM535Nr33w200uRXofGB0I9Tz8F9Ladr48A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFYbmo4ZzNlTUwu/anBn",
      features: [
        "High-fidelity Sound",
        "Frequency Response: 50Hz - 20kHz",
        "Power Handling: 180W RMS",
        "Impedance: 8 Ohms",
      ],
    },
    {
      id: 5,
      name: "Bluetooth Portable Speaker",
      price: 99.99,
      description:
        "Compact Bluetooth speaker with built-in microphone for calls",
      image:
        "https://imgs.search.brave.com/MQHHV3uIe_Dr6VuONPEDpZaqYX7BHQdjeGtuRJhOfvE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhLzRm/NGIwMzMwLTczYjIt/NDk2YS05ZWI0LTQw/NWI1ZDBiYTRhMy5f/X0NSMCwwLDMwMCwz/MDBfUFQwX1NYMzAw/X1YxX19fLmpwZw",
      features: [
        "Bluetooth Connectivity",
        "Built-in Microphone",
        "Waterproof Design (IPX7)",
        "12h Playtime",
      ],
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <header>
        <h1>Premium Audio Store</h1>
        <div className="cart-icon">🛒 {cart.length}</div>
      </header>

      <main>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-section">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-details">
                <h2>{product.name}</h2>
                <p className="price">${product.price}</p>
                <p className="description">{product.description}</p>

                <div className="features">
                  <h3>Features:</h3>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <button
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-section">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(index)}
                  >
                    ✕
                  </button>
                </div>
              ))}
              <div className="cart-total">
                <h3>Total: ${total.toFixed(2)}</h3>
                <button className="checkout-button">Proceed to Checkout</button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
