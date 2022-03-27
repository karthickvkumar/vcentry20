import React from "react";

const ProductComponent = (props) => {
  return(
    <div className="single-product">
      <div className="product-f-image">
        <img src={props.image} alt="" />
        <div className="product-hover">
          <a href="#" className="add-to-cart-link">
            <i className="fa fa-shopping-cart"></i> Add to cart
          </a>
          <a href="single-product.html" className="view-details-link">
            <i className="fa fa-link"></i> See details
          </a>
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