import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    cssEase: "linear",

    autoplaySpeed: 5000,
};

const Products = () => {
    return (<div className={"container"}>
        <div className={"top-products-heading-section"}>
            <h1>Top Products</h1>
            <img src={"/icons/hr.svg"} alt={"products plate 1 image"} className={"card-image-resize"}/>

        </div>

       <div className={"product-slider"}>
           <Slider {...settings}>

               <div>
                   <div className={"card"}>
                       <div className={"card-image"}>
                           <img src={"/images/plate-1.png"} alt={"products plate 1 image"}
                                className={"card-image-resize"}/>
                       </div>
                       <hr/>
                       <div className={"card-description"}>
                           <h3>Cottage Pie</h3>
                           <div className={"stars"}>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>

                           </div>

                           <p>£5.00</p>

                           <div className={"cart-button-wrapper"}>
                               <i className="bi bi-cart-fill"></i> <span className={"add-to-cart"}> Add to Cart</span>
                           </div>


                       </div>

                   </div>
               </div>

               <div>
                   <div className={"card"}>
                       <div className={"card-image"}>
                           <img src={"/images/plate-2.png"} alt={"products plate 1 image"}
                                className={"card-image-resize"}/>
                       </div>
                       <hr/>
                       <div className={"card-description"}>
                           <h3>Winter Salad</h3>
                           <div className={"stars"}>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>

                           </div>

                           <p>£5.00</p>


                           <div className={"cart-button-wrapper"}>
                               <i className="bi bi-cart-fill"></i> <span className={"add-to-cart"}> Add to Cart</span>
                           </div>


                       </div>

                   </div>
               </div>


               <div>
                   <div className={"card"}>
                       <div className={"card-image"}>
                           <img src={"/images/plate-3.png"} alt={"products plate 1 image"}
                                className={"card-image-resize"}/>
                       </div>
                       <hr/>
                       <div className={"card-description"}>
                           <h3>Summer Salad</h3>
                           <div className={"stars"}>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>

                           </div>

                           <p>£5.00</p>


                           <div className={"cart-button-wrapper"}>
                               <i className="bi bi-cart-fill"></i> <span className={"add-to-cart"}> Add to Cart</span>
                           </div>


                       </div>

                   </div>
               </div>


               <div>
                   <div className={"card"}>
                       <div className={"card-image"}>
                           <img src={"/images/plate-1.png"} alt={"products plate 1 image"}
                                className={"card-image-resize"}/>
                       </div>
                       <hr/>
                       <div className={"card-description"}>
                           <h3>Winter Salad</h3>
                           <div className={"stars"}>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>

                           </div>

                           <p>£5.00</p>


                           <div className={"cart-button-wrapper"}>
                               <i className="bi bi-cart-fill"></i> <span className={"add-to-cart"}> Add to Cart</span>
                           </div>


                       </div>

                   </div>
               </div>

               <div>
                   <div className={"card"}>
                       <div className={"card-image"}>
                           <img src={"/images/plate-2.png"} alt={"products plate 1 image"}
                                className={"card-image-resize"}/>
                       </div>
                       <hr/>
                       <div className={"card-description"}>
                           <h3>Summer Salad</h3>
                           <div className={"stars"}>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>
                               <img src={"/icons/start-filled.svg"} alt={"star icon"}/>

                           </div>

                           <p>£5.00</p>


                           <div className={"cart-button-wrapper"}>
                               <i className="bi bi-cart-fill"></i> <span className={"add-to-cart"}> Add to Cart</span>
                           </div>


                       </div>

                   </div>
               </div>
           </Slider>
       </div>
        <div className={"flex justify-center"}>
            <button className={"btn btn-secondary  view-more-products-button"}>View More</button>
        </div>
    </div>)
}

export default Products