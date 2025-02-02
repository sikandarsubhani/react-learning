export const getCart = () => {
  return JSON.parse(localStorage.getItem('cart')) || [];
};

export const addToCart = (product) => {
  const cart = getCart();
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const updateCart = (productId, quantity) => {
  let cart = getCart();
  cart = cart.map(item => item.id === productId ? { ...item, quantity } : item);
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeFromCart = (productId) => {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
};
