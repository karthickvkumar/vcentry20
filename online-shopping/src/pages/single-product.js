import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const SingleProductPage = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    loadProduct();
  }, [])
  
  const loadProduct = () => {
    const url = "https://shop143.herokuapp.com/telebuy/api/product/" + id;
    axios.get(url)
      .then((response) => {
        console.log(response);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2>Preview</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-content-right">
                <div className="product-breadcroumb">
                  <a href="">Home</a>
                  <a href="">Category Name</a>
                  <a href="">{product.name}</a>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="product-images">
                      <div className="product-main-img">
                        <img src={product.image} alt="" />
                      </div>

                      <div className="product-gallery">
                        <img src="img/product-thumb-1.jpg" alt="" />
                        <img src="img/product-thumb-2.jpg" alt="" />
                        <img src="img/product-thumb-3.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="product-inner">
                      <h2 className="product-name">{product.name}</h2>
                      <div className="product-inner-price">
                        <ins>{product.discount_price}</ins> <del>{product.actual_price}</del>
                      </div>

                      <form action="" className="cart">
                        <div className="quantity">
                          {/* <input
                            type="number"
                            size="4"
                            className="input-text qty text"
                            title="Qty"
                            value="1"
                            name="quantity"
                            min="1"
                            step="1"
                          /> */}
                        </div>
                        <button className="add_to_cart_button" type="submit">
                          Add to cart
                        </button>
                      </form>

                      <div className="product-inner-category">
                        <p>
                          Category: {product.tags}
                        </p>
                      </div>

                      <div role="tabpanel">
                        <ul className="product-tab" role="tablist">
                          <li role="presentation" className="active">
                            <a
                              href="#home"
                              aria-controls="home"
                              role="tab"
                              data-toggle="tab"
                            >
                              Description
                            </a>
                          </li>
                          
                        </ul>
                        <div className="tab-content">
                          <div
                            role="tabpanel"
                            className="tab-panein active"
                            id="home"
                          >
                            <h2>Product Description</h2>
                            <p>
                            {product.description}
                            </p>
                          </div>
                          <div
                            role="tabpanel"
                            className="tab-pane"
                            id="profile"
                          >
                            <h2>Reviews</h2>
                            <div className="submit-review">
                              <p>
                                <label htmlFor="name">Name</label>{" "}
                                <input name="name" type="text" />
                              </p>
                              <p>
                                <label htmlFor="email">Email</label>{" "}
                                <input name="email" type="email" />
                              </p>
                              <div className="rating-chooser">
                                <p>Your rating</p>

                                <div className="rating-wrap-post">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </div>
                              </div>
                              <p>
                                <label htmlFor="review">Your review</label>{" "}
                                <textarea
                                  name="review"
                                  id=""
                                  cols="30"
                                  rows="10"
                                ></textarea>
                              </p>
                              <p>
                                {/* <input type="submit" value="Submit" /> */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
