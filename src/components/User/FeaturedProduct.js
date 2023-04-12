import React, { Fragment } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
	items: 4,
	nav: true,
	loop:true,
	navText: ["<div className='nav-btn prev-slide'></div>", "<div className='nav-btn next-slide'></div>"],
	autoplay: true,
	autoplayTimeout:3000,
	dots: true,
	dotsEach: true,
	dotData: true,
};

const FeaturedProduct = () => {
	return (
		<Fragment>

			<div className="product-area pt-80 pb-30 product-style-2">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title text-center">
								<h2 className="title-border">Featured Products</h2>
							</div>
						</div>
					</div>


					<div className="row cus-row-30">

						<div className="product-slider arrow-left-right">
							<OwlCarousel margin={10} {...options} >
								<div className="col-lg-12">
									<div className="single-product">
										<div className="product-img">
											<span className="pro-label new-label">new</span>
											<a href="single-product.html"><img src="assets/img/product/1.jpg" alt="" /></a>
										</div>
										<div className="product-info clearfix text-center">
											<div className="fix">
												<h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
												<div className="product-price"><span className="price-1">$42.00</span>&nbsp;<span
													className="price-2">$65.00</span></div>
											</div>
										</div>
									</div>
								</div>


								<div className="col-lg-12">
									<div className="single-product">
										<div className="product-img">
											<span className="pro-label sale-label">Sale</span>
											<a href="single-product.html"><img src="assets/img/product/5.jpg" alt="" /></a>
										</div>
										<div className="product-info clearfix text-center">
											<div className="fix">
												<h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
												<div className="product-price"><span className="price-1">$42.00</span>&nbsp;<span
													className="price-2">$65.00</span></div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-12">
									<div className="single-product">
										<div className="product-img">
											<span className="pro-label new-label">new</span>
											<a href="single-product.html"><img src="assets/img/product/12.jpg" alt="" /></a>
										</div>
										<div className="product-info clearfix text-center">
											<div className="fix">
												<h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
												<div className="product-price"><span className="price-1">$42.00</span>&nbsp;<span
													className="price-2">$65.00</span></div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-12">
									<div className="single-product">
										<div className="product-img">
											<span className="pro-label new-label">new</span>
											<a href="single-product.html"><img src="assets/img/product/6.jpg" alt="" /></a>
										</div>
										<div className="product-info clearfix text-center">
											<div className="fix">
												<h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
												<div className="product-price"><span className="price-1">$42.00</span>&nbsp;<span
													className="price-2">$65.00</span></div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-12">
									<div className="single-product">
										<div className="product-img">
											<span className="pro-label sale-label">sale</span>
											<a href="single-product.html"><img src="assets/img/product/8.jpg" alt="" /></a>
										</div>
										<div className="product-info clearfix text-center">
											<div className="fix">
												<h4 className="post-title"><a href="#">Comfort Handy Craft</a></h4>
												<div className="product-price"><span className="price-1">$42.00</span>&nbsp;<span
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
		</Fragment>
	)
}

export default FeaturedProduct