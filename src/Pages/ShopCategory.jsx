import React, { useContext } from 'react';
import PropTypes from 'prop-types'; // Assure-toi que PropTypes est bien importé
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  const matchCategory = (itemCategory, propCategory) => {
    // Normalisation des catégories
    const categories = {
      'women': 'womens',
      'kid': 'kids',
      'mens': 'mens'
    };
    
    return itemCategory === (categories[propCategory] || propCategory);
  };

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (matchCategory(item.category, props.category)) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

// Définition des propTypes pour valider les props 'category' et 'banner'
ShopCategory.propTypes = {
  category: PropTypes.string.isRequired, // 'category' doit être une chaîne de caractères
  banner: PropTypes.string.isRequired,   // 'banner' doit être une chaîne de caractères
};

export default ShopCategory;
