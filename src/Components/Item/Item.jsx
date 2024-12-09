import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, image, name, new_price, old_price }) => {
  return (
    <Link to={`/product/${id}`} className='item'>
      <img onClick={window.scrollTo(0,0)} src={image} alt={name} />
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${new_price}
        </div>
        <div className="item-price-old">
          ${old_price}
        </div>
      </div>
    </Link>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  new_price: PropTypes.number.isRequired,
  old_price: PropTypes.number.isRequired,
};

export default Item;
