import React from "react";
// import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import Carousel from "react-bootstrap/Carousel";
import ProductComponent from "../components/product";

const HomePage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/h4-slide2.png")}
            alt="First slide"
          />
          <Carousel.Caption>
            <div class="caption-group">
              <h2 class="caption title">
                Apple{" "}
                <span class="primary">
                  Store <strong>Ipod</strong>
                </span>
              </h2>
              <h4 class="caption subtitle">& Phone</h4>
              <a class="caption button-radius" href="#">
                <span class="icon"></span>Shop now
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/h4-slide3.png")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div class="caption-group">
              <h2 class="caption title">
                Apple{" "}
                <span class="primary">
                  Store <strong>Ipod</strong>
                </span>
              </h2>
              <h4 class="caption subtitle">& Phone</h4>
              <a class="caption button-radius" href="#">
                <span class="icon"></span>Shop now
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/h4-slide4.png")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div class="caption-group">
              <h2 class="caption title">
                Apple{" "}
                <span class="primary">
                  Store <strong>Ipod</strong>
                </span>
              </h2>
              <h4 class="caption subtitle">& Phone</h4>
              <a class="caption button-radius" href="#">
                <span class="icon"></span>Shop now
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div class="maincontent-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="latest-product">
                <h2 class="section-title">Latest Products</h2>
                <div class="product-carousel">
                  <ProductComponent></ProductComponent>

                  <ProductComponent></ProductComponent>

                  <ProductComponent></ProductComponent>

                  <ProductComponent></ProductComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="promo-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="single-promo promo1">
                <i class="fa fa-refresh"></i>
                <p>30 Days return</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-promo promo2">
                <i class="fa fa-truck"></i>
                <p>Free shipping</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-promo promo3">
                <i class="fa fa-lock"></i>
                <p>Secure payments</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-promo promo4">
                <i class="fa fa-gift"></i>
                <p>New products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="product-widget-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="single-product-widget">
                <h2 class="product-wid-title">Top Sellers</h2>
                <a href="" class="wid-view-more">
                  View All
                </a>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-1.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Sony Smart TV - 2015</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-2.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Apple new mac book 2015</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-3.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Apple new i phone 6</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-product-widget">
                <h2 class="product-wid-title">Recently Viewed</h2>
                <a href="#" class="wid-view-more">
                  View All
                </a>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-4.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Sony playstation microsoft</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-1.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Sony Smart Air Condtion</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-2.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Samsung gallaxy note 4</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-product-widget">
                <h2 class="product-wid-title">Top New</h2>
                <a href="#" class="wid-view-more">
                  View All
                </a>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-3.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Apple new i phone 6</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-4.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Samsung gallaxy note 4</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-1.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Sony playstation microsoft</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent></FooterComponent>
    </div>
  );
};

export default HomePage;
