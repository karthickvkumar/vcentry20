import React from "react";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import { addToCart } from "../redux/action/product-action";

const ProductComponent = (props) => {

  const dispatch = useDispatch();

  return(
    <div className="single-product">
      <div className="product-f-image">
        <img src={props.image} alt="" />
        <div className="product-hover">
          <a onClick={() => dispatch(addToCart(props))} className="add-to-cart-link">
            <i className="fa fa-shopping-cart"></i> Add to cart
          </a>
          <NavLink to={"/single-product/" + props.id} className="view-details-link">
            <i className="fa fa-link"></i> See details
          </NavLink>
        </div>
      </div>

      <h2>
        <a href="single-product.html">{props.name}</a>
      </h2>

      <div className="product-carousel-price">
        <ins>{props.discount_price}</ins> <del>{props.actual_price}</del>
      </div>
    </div>
  )
}

export default ProductComponent;