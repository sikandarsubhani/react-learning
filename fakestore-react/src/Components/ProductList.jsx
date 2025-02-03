// import ProductCard from "./ProductCard";
// import './../styles/ProductList.css'
// const ProductList = ({ products }) => {
//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;
import React from 'react';
import ProductCard from "./ProductCard";
import SellerDashboard from './SellerDashboard'; // Import the SellerDashboard component
import './../styles/ProductList.css';

const ProductList = ({ products, userType }) => {
  return (
    <div className="product-list">
      {userType === 'seller' ? (
        <SellerDashboard /> // Render SellerDashboard if user is a seller
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;