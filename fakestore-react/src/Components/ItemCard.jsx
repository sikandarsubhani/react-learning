import PropTypes from "prop-types";
import "./../css/ItemCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';



function ItemCard({ item }) {

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={`star-${i}`} icon={faStar} style={{ color: "#FFD700" }} />);
    }

    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half-star" icon={faStarHalf} style={{ color: "#FFD700" }} />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStarEmpty} style={{ color: "#FFD700" }} />);
    }

    return stars;
  };


  function addToCart() {
    alert("cart button pressed")
  }

  return (
    <div className="card-container">
      <div className="item-card">
        <div className="item-poster">
          <img src={item.image || 'placeholder-image.jpg'} alt={item.title} />
          <div className="item-info">
            <div className="item-title"> <h3>{item.title}</h3></div>
            <p>
              {renderStars(item.rating.rate)}
              {/* <span className="rating-star">({item.rating.rate})</span> */}

              <span className="rating-count">({item.rating.count})</span>
            </p>
          </div>
          <div className="cart-btn">
            <button className="cart-button" onClick={addToCart}>
              <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



ItemCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number
    }).isRequired
  }).isRequired
};
export default ItemCard;