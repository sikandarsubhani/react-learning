 // src/Components/SellerDashboard.jsx
// import React, { useState } from 'react';
// import './../styles/SellerDashboard.css'; 

// const SellerDashboard = () => {
//     const [productName, setProductName] = useState('');
//     const [productPrice, setProductPrice] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [category, setCategory] = useState('');
//     const [productImage, setProductImage] = useState('');
//     const [productRate, setProductRate] = useState('');
//     const [productCount, setProductCount] = useState('');
//     const [productList, setProductList] = useState([]);
//     const sellerId = localStorage.getItem('loggedInUser'); // Assume sellerId is stored in localStorage

//     const handleAddProduct = (event) => {
//         event.preventDefault();

//         const newProduct = {
//             id: Date.now(),
//             title: productName,
//             price: parseFloat(productPrice),
//             description: productDescription,
//             category,
//             image: productImage,
//             rating: {
//                 rate: parseFloat(productRate),
//                 count: parseInt(productCount)
//             },
//             owner: sellerId // Add owner information
//         };

//         setProductList([...productList, newProduct]);
//         // Reset form fields
//         setProductName('');
//         setProductPrice('');
//         setProductDescription('');
//         setCategory('');
//         setProductImage('');
//         setProductRate('');
//         setProductCount('');
//     };

//     const handleDeleteProduct = (index) => {
//         const newList = productList.filter((_, i) => i !== index);
//         setProductList(newList);
//     };

//     // Filter products owned by the seller
//     const ownedProducts = productList.filter(product => product.owner === sellerId);

//     return (
//         <div className="dashboard-container">
//             <h1>Seller Dashboard</h1>
//             <form onSubmit={handleAddProduct}>
//                 <div className="user-box">
//                     <input
//                         type="text"
//                         value={productName}
//                         onChange={(e) => setProductName(e.target.value)}
//                         required
//                     />
//                     <label>Product Name</label>
//                 </div>
//                 <div className="user-box">
//                     <input
//                         type="number"
//                         value={productPrice}
//                         onChange={(e) => setProductPrice(e.target.value)}
//                         required
//                     />
//                     <label>Product Price</label>
//                 </div>
//                 <div className="user-box">
//                     <textarea
//                         value={productDescription}
//                         onChange={(e) => setProductDescription(e.target.value)}
//                         required
//                     />
//                     <label>Product Description</label>
//                 </div>
//                 <div className="user-box">
//                     <input
//                         type="text"
//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                         required
//                     />
//                     <label>Category</label>
//                 </div>
//                 <div className="user-box">
//                     <input
//                         type="text"
//                         value={productImage}
//                         onChange={(e) => setProductImage(e.target.value)}
//                         required
//                     />
//                     <label>Image URL</label>
//                 </div>
//                 <div className="user-box">
//                     <input
//                         type="number"
//                         value={productRate}
//                         onChange={(e) => setProductRate(e.target.value)}
//                         required
//                     />
//                     <label>Rating</label>
//                 </div>
//                 <div className="user-box">
//                     <input
//                         type="number"
//                         value={productCount}
//                         onChange={(e) => setProductCount(e.target.value)}
//                         required
//                     />
//                     <label>Count</label>
//                 </div>
//                 <button type="submit">Add Product</button>
//             </form>
//             <h2>Your Products</h2>
//             <ul>
//                 {ownedProducts.map((product, index) => (
//                     <li key={index}>
//                         {product.title} - ${product.price}
//                         <button onClick={() => handleDeleteProduct(index)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default SellerDashboard;


import React, { useState } from 'react';
import './../styles/SellerDashboard.css';

const SellerDashboard = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [category, setCategory] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productRate, setProductRate] = useState('');
    const [productCount, setProductCount] = useState('');
    const [productList, setProductList] = useState([]);
    const [formVisible, setFormVisible] = useState(false); // State for form visibility
    const sellerId = localStorage.getItem('loggedInUser');

    const handleAddProduct = (event) => {
        event.preventDefault();
        const newProduct = {
            id: Date.now(),
            title: productName,
            price: parseFloat(productPrice),
            description: productDescription,
            category,
            image: productImage,
            rating: {
                rate: parseFloat(productRate),
                count: parseInt(productCount)
            },
            owner: sellerId
        };
        
        setProductList([...productList, newProduct]);
        setProductName('');
        setProductPrice('');
        setProductDescription('');
        setCategory('');
        setProductImage('');
        setProductRate('');
        setProductCount('');
        setFormVisible(false); // Hide form after adding product
        localStorage.setItem('productList', JSON.stringify(productList));
        productList.push(newProduct);

    };

    const getSellerProducts = () => {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        return productList.filter(product => {  
          const owner = JSON.parse(product.owner); // Parse owner string to object
          return owner.email === user.email; // Match based on email or any unique identifier
        });
      };

    const handleDeleteProduct = (index) => {
        const newList = productList.filter((_, i) => i !== index);
        setProductList(newList);
        localStorage.setItem('productList', JSON.stringify(newList));
    };

    const toggleFormVisibility = () => {
        setFormVisible(!formVisible);
    };

    return (
        <>
        <div className="add-button-container">
            <span className="material-symbols-outlined" onClick={toggleFormVisibility}>
                add_box
            </span>
            </div>
            
            {formVisible && (
        <div className="dashboard-container">
          <h1>Seller Dashboard</h1>  
                <form onSubmit={handleAddProduct} className="popup-form">
                    <div className="user-box">
                     <input
                         type="text"
                         value={productName}
                         onChange={(e) => setProductName(e.target.value)}
                         required
                     />
                     <label>Product Name</label>
                 </div>
                 <div className="user-box">
                     <input
                         type="number"
                         value={productPrice}
                         onChange={(e) => setProductPrice(e.target.value)}
                         required
                     />
                     <label>Product Price</label>
                 </div>
                 <div className="user-box">
                     <textarea
                         value={productDescription}
                         onChange={(e) => setProductDescription(e.target.value)}
                         required
                     />
                     <label>Product Description</label>
                 </div>
                 <div className="user-box">
                     <input
                         type="text"
                         value={category}
                         onChange={(e) => setCategory(e.target.value)}
                         required
                     />
                     <label>Category</label>
                 </div>
                 <div className="user-box">
                     <input
                         type="text"
                         value={productImage}
                         onChange={(e) => setProductImage(e.target.value)}
                         required
                     />
                     <label>Image URL</label>
                 </div>
                 <div className="user-box">
                     <input
                         type="number"
                         value={productRate}
                         onChange={(e) => setProductRate(e.target.value)}
                     />
                     <label>Rating</label>
                 </div>
                 <div className="user-box">
                     <input
                         type="number"
                         value={productCount}
                         onChange={(e) => setProductCount(e.target.value)}
                         
                     />
                     <label>Count</label>
                 </div>
                <button type="submit">Add Product</button>
                </form>
             
        </div>
        )} 
        <div className="products-container">
                <h2>Your Products</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Ratings</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getSellerProducts().map((product, index) => (
                            <tr key={index}>
                                <td><img src={product.image} alt={product.title} style={{ width: '50px' }} /></td>
                                <td>{product.title}</td>
                                <td>${product.price}</td>
                                <td>{product.rating.rate} ({product.rating.count})</td>
                                <td>{product.category}</td>
                                <td><button onClick={() => handleDeleteProduct(index)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SellerDashboard;