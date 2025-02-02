import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCurrentUser } from '../utils/auth';
import { addToCart } from '../utils/cart';
import LoginModal from '../components/LoginModal';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const currentUser = getCurrentUser();

  useEffect(() => {
    // Fetch product details from API or local data
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (currentUser) {
      addToCart(product);
    } else {
      setShowLoginModal(true);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="product-detail-image" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
      <Link to="/" className="back-to-home">Back to Home</Link>
      {showLoginModal && <LoginModal setCurrentUser={() => setShowLoginModal(false)} />}
    </div>
  );
};

export default ProductDetail;
