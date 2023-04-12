import React, { Fragment } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const images = [
//     { url: "assets/img/home/slide-01.jpg" },
//     { url: "assets/img/home/1_1.jpg" },
//     { url: "assets/img/home/2_2_1.jp" }
//   ];

const options = {
  items: 1,
  nav: true,
  navText: ["<div className='nav-btn prev-slide'></div>", "<div className='nav-btn next-slide'></div>"],
  rewind: true,
  autoplay: true,
  autoplayTimeout:3000,
  slideBy: 1,
  dots: true,
  dotsEach: true,
  dotData: true
};

const Banner = () => {
  return (
    <Fragment>
      <section className="slider-area slider-style-2">
        <div className="bend niceties preview-2">
          <div id="ensign-nivoslider" className="slides">
            <OwlCarousel margin={10} {...options} >
              <img src="assets/img/home/slide-01.jpg" alt="" title="#slider-direction-1" />
              <img src="assets/img/home/1_1.jpg" alt="" title="#slider-direction-2" />
              <img src="assets/img/home/2_2_1.jpg" alt="" title="#slider-direction-3" />
            </OwlCarousel>
          </div>

       
            <div id="slider-direction-1" className="t-cn slider-direction">
              <div className="slider-progress"></div>
              <div className="slider-content t-lfl s-tb slider-1">
                <div className="title-container s-tb-c title-compress">
                  <div className="layer-1">
                
                    <div className="wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0.5s">
                      <h3 className="slider-title3">Best Furniture For Your Castle....</h3>
                    </div>
                    <div className="wow fadeInUpBig" data-wow-duration="2.5s" data-wow-delay="0.5s">
                      <h2 className="slider-title1">New Furniture Collection<br />
                        Trends in 2023</h2>
                    </div>
                    <div className="wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0.5s">
                      <p className="slider-pro-brief">Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                        elit. Magna in est adipiscing
                        in phasellus non in justo.</p>
                    </div>
                    <div className="wow fadeInUpBig" data-wow-duration="3.5s" data-wow-delay="0.5s">
                      <a href="#" className="button-one style-2 text-uppercase mt-20"
                        data-text="Shop now">Shop now</a>
                    </div>
                   
                  </div>
            
                </div>
              </div>
            </div>
     
          <OwlCarousel margin={10} {...options} >
            <div id="slider-direction-2" className="slider-direction">
              <div className="slider-progress"></div>
              <div className="slider-content t-lfl s-tb slider-1">
                <div className="title-container s-tb-c title-compress">
                  <div className="layer-1">
                    <div className="wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                      <h3 className="slider-title3">Best Furniture For Your Castle....</h3>
                    </div>
                    <div className="wow fadeInUpBig" data-wow-duration="1.5s" data-wow-delay="0.5s">
                      <h2 className="slider-title1">New Furniture Collection
                        Trends in 2023</h2>
                    </div>
                    <div className="wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0.5s">
                      <p className="slider-pro-brief">Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                        elit. Magna in est adipiscing
                        in phasellus non in justo.</p>
                    </div>
                    <div className="wow fadeInUpBig" data-wow-duration="2.5s" data-wow-delay="0.5s">
                      <a href="#" className="button-one style-2 text-uppercase mt-20"
                        data-text="Shop now">Shop now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
          <OwlCarousel margin={10} {...options} >
            <div id="slider-direction-3" className="slider-direction">
              <div className="slider-progress"></div>
              <div className="slider-content t-lfl s-tb slider-1">
                <div className="title-container s-tb-c title-compress">
                  <div className="layer-1">
                    <div className="wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                      <h3 className="slider-title3">Best Furniture For Your Castle....</h3>
                    </div>
                    <div className="wow fadeInUpBig" data-wow-duration="1.5s" data-wow-delay="0.5s">
                      <h2 className="slider-title1">New Furniture Collection<br />
                        Trends in 2023</h2>
                    </div>
                    <div className="wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0.5s">
                      <p className="slider-pro-brief">Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                        elit. Magna in est adipiscing
                        in phasellus non in justo.</p>
                    </div>
                    <div className="wow fadeInUpBig" data-wow-duration="3s" data-wow-delay="0.5s">
                      <a href="#" className="button-one style-2 text-uppercase mt-20"
                        data-text="Shop now">Shop now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </OwlCarousel>
        </div>
      </section>

    </Fragment>
  )
}

export default Banner

{/* <SimpleImageSlider
width={1300}
height={500}
images={images}
showBullets={true}
showNavs={true}
slideDuration={0.5}
autoPlay= {true}
loop={true}
autoPlayDelay={2.0}
/> */}