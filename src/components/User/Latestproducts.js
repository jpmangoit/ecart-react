import React, { Fragment } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./LatestProduct.css"
const options = {
  items: 4,
  nav: true,
  loop: true,
  navText: ["<div className='nav-btn prev-slide'></div>", "<div className='nav-btn next-slide'></div>"],
  autoplay: true,
  autoplayTimeout: 3000,
  dots: true,
  dotsEach: true,
  dotData: true,
};

const Latestproducts = () => {
  return (
    <Fragment>
      <div className="purchase-online-area pt-80 product-style-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title-border">Latest Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12  text-center">
              <ul className="tab-menu clearfix">
                <li className="active"><a href="#new-arrivals" data-toggle="tab">New Arrivals</a></li>
                <li><a href="#best-seller" data-toggle="tab">Best Seller </a></li>
                <li><a href="#most-view" data-toggle="tab">Most View </a></li>
              </ul>
            </div>
            <div className="col-lg-12">
              <div className="tab-content">
                <div className="tab-pane active" id="new-arrivals">
                  <div className="row">
                    <OwlCarousel margin={10} {...options} >
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <span className="pro-label new-label">new</span>
                            <a href="single-product.html"><img src="assets/img/product/6.jpg" alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <span className="pro-label sale-label">sale</span>
                            <a href="single-product.html"><img src="assets/img/product/3.jpg" alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="single-product.html"><img src="assets/img/product/7.jpg" alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <span className="pro-label new-label">new</span>
                            <a href="single-product.html"><img src="assets/img/product/8.jpg" alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <span className="pro-label sale-label">sale</span>
                            <a href="single-product.html"><img src="assets/img/product/10.jpg"
                              alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="single-product.html"><img src="assets/img/product/8.jpg" alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </OwlCarousel>
                  </div>
                </div>

                <div className="tab-pane" id="best-seller">
                  <div className="row">
                    <OwlCarousel margin={10} {...options} >
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <span className="pro-label new-label">new</span>
                            <a href="single-product.html"><img src="assets/img/product/6.jpg" alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <span className="pro-label sale-label">sale</span>
                            <a href="single-product.html"><img src="assets/img/product/3.jpg" alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="single-product.html"><img src="assets/img/product/7.jpg" alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <span className="pro-label new-label">new</span>
                            <a href="single-product.html"><img src="assets/img/product/8.jpg" alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <span className="pro-label sale-label">sale</span>
                            <a href="single-product.html"><img src="assets/img/product/10.jpg"
                              alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="single-product.html"><img src="assets/img/product/8.jpg" alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>

                </div>
                <div className="tab-pane" id="most-view">
                  <div className="row">
                    <OwlCarousel margin={10} {...options} >
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <span className="pro-label new-label">new</span>
                            <a href="single-product.html"><img src="assets/img/product/6.jpg" alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <span className="pro-label sale-label">sale</span>
                            <a href="single-product.html"><img src="assets/img/product/3.jpg" alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="single-product.html"><img src="assets/img/product/7.jpg" alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <span className="pro-label new-label">new</span>
                            <a href="single-product.html"><img src="assets/img/product/8.jpg" alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <span className="pro-label sale-label">sale</span>
                            <a href="single-product.html"><img src="assets/img/product/10.jpg"
                              alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 latestproduct">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="single-product.html"><img src="assets/img/product/8.jpg" alt="" /></a>
                          </div>
                          <div className="product-info">
                            <div className="fix">
                              <h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
                              <div className="product-price"><span
                                className="price-1">$42.00</span>&nbsp;<span
                                  className="price-2">$65.00</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment >
  )
}

export default Latestproducts