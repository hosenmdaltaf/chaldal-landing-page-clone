import React from 'react'
import Slider from "react-slick";

function Orderslider() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        
        };
    return ( 
        <div className="fullorderslider">
            <h2 className="ordersliderh2">How to order from Chaldal ?</h2>
            <Slider {...settings}>
            <div className="orderslider">
                <img className="ordersliderimg" src="img/tutorial-1.webp" alt="orderslider"/>
            </div>
            
            <div className="orderslider">
                <img className="ordersliderimg" src="img/tutorial-2.webp" alt="orderslider"/>
            </div>

            <div className="orderslider">
                <img className="ordersliderimg" src="img/tutorial-3.webp" alt="orderslider"/>
            </div>

            </Slider>
       
        </div>
    )
}

export default Orderslider
