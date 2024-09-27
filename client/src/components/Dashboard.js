import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../dashboard.css"; // Importing the CSS file
import toast, { Toaster } from "react-hot-toast";

const Dashboard = () => {
  // States for managing dynamic data
  const [showSellerDropdown, setShowSellerDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [products, setProducts] = useState([]);
  const [orderDetailsVisible, setOrderDetailsVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const toggleSellerDropdown = () => {
    setShowSellerDropdown(true);
    setShowUserDropdown(false);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(true);
    setShowSellerDropdown(false);
  };

  // Function to handle adding a product
  const addProduct = (event) => {
    event.preventDefault();
    const name = event.target["product-name"].value;
    const description = event.target["product-description"].value;
    const price = event.target["product-price"].value;
    const imageUrl = event.target["product-image"].value;

    const newProduct = { id: Date.now(), name, description, price, imageUrl };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    event.target.reset();
    alert("Product added successfully");
  };

  // Function to remove a product
  const removeProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    alert("Product removed successfully");
  };

  // Function to handle view order details
  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
    setOrderDetailsVisible(true);
  };

  // Function to close order details
  const closeOrderDetails = () => {
    setOrderDetailsVisible(false);
    setSelectedOrder(null);
  };

  // Mark order as shipped
  const markAsShipped = (orderId) => {
    alert(`Order ${orderId} marked as shipped.`);
  };

  // Cancel the order
  const cancelOrder = (orderId) => {
    alert(`Order ${orderId} has been canceled.`);
  };

  return (
    <div>
      <header>
        <a href="#" className="logo">
          <i className="fas fa-store"></i>Vocify
        </a>
        <div>
          <ul id="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className="dropbtn">About</span>
              {showDropdown && (
                <div className="dropdown-content">
                  <Link to="/Course">Courses</Link>
                  <Link to="/Campaign">Campaign</Link>
                  <Link to="/Campaign">Future Creators</Link>
                  <Link to="/About">Know Us</Link>
                  <Link to="/About">Join US</Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>

      <div className="hero-image"></div>

      <main>
        {/* Dashboard Section */}
        <section id="dashboard">
          <h2>Dashboard</h2>
          <div className="dashboard-cards">
            <div className="card">
              <h3>Total Sales</h3>
              <p>-</p>
            </div>
            <div className="card">
              <h3>Products Listed</h3>
              <p>{products.length}</p>
            </div>
            <div className="card">
              <h3>Orders Received</h3>
              <p>-</p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products">
          <h2>Products</h2>

          {/* Add New Product Form */}
          <section id="product-form">
            <h3>Add New Product</h3>
            <form id="add-product-form" onSubmit={addProduct}>
              <label htmlFor="product-name">Product Name:</label>
              <input type="text" id="product-name" required />
              <label htmlFor="product-description">Description:</label>
              <textarea id="product-description" required></textarea>
              <label htmlFor="product-price">Price:</label>
              <input type="number" id="product-price" required />
              <label htmlFor="product-image">Image URL:</label>
              <input type="url" id="product-image" required />
              <button type="submit">Add Product</button>
            </form>
          </section>

          {/* Product List */}
          <section id="product-list">
            <h3>Product List</h3>
            <ul id="product-items">
              {products.map((product, index) => (
                <li key={product.id} className="product-item">
                  <img
                    className="product-img"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                  <div>
                    <strong>{product.name}</strong>
                    <p>{product.description}</p>
                    <p>Price: Rs.{product.price}</p>
                  </div>
                  <button onClick={() => removeProduct(index)}>Remove</button>
                </li>
              ))}
            </ul>
          </section>
        </section>

        {/* Orders Section */}
        <section id="orders">
          <h2>Orders</h2>
          <div className="order-summary">
            <div className="card">
              <h3>Total Orders</h3>
              <p>-</p>
            </div>
            <div className="card">
              <h3>Pending Orders</h3>
              <p>-</p>
            </div>
            <div className="card">
              <h3>Completed Orders</h3>
              <p>-</p>
            </div>
            <div className="card">
              <h3>Canceled Orders</h3>
              <p>-</p>
            </div>
          </div>

          {/* Order Table */}
          <table className="order-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#0056b3</td>
                <td>Pr202</td>
                <td>2</td>
                <td>Rs 200.00</td>
                <td>2024-09-02</td>
                <td>Pending</td>
                <td>
                  <button
                    onClick={() =>
                      viewOrderDetails({
                        id: "#0056b3",
                        customer: "Shikha",
                        address: "123 Street, City, Country",
                      })
                    }
                  >
                    View Details
                  </button>
                  <button onClick={() => markAsShipped(12345)}>
                    Mark as Shipped
                  </button>
                  <button onClick={() => cancelOrder(12345)}>
                    Cancel Order
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Order Details */}
          {orderDetailsVisible && selectedOrder && (
            <div id="order-details">
              <h3>Order Details</h3>
              <p>Order ID: {selectedOrder.id}</p>
              <p>Customer: {selectedOrder.customer}</p>
              <p>Address: {selectedOrder.address}</p>
              <button onClick={closeOrderDetails}>Close</button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
