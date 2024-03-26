import React from 'react';

const products = [
  { name: 'Product 1', price: '$10.00' },
  { name: 'Product 2', price: '$20.00' },
  { name: 'Product 3', price: '$30.00' },
];

const App = () => {
  const addToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
  };

  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <div>Logo</div>
        <ul className="flex">
          <li className="mr-4">Home</li>
          <li>About</li>
        </ul>
        <div>Cart Notification Button</div>
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product, index) => (
          <div key={index} className="border p-4">
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <p className="text-sm mb-2">{product.price}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => addToCart(product.name)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
