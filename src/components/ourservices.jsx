const OurServices = () => {

    return (<div className={"container"}>
        <div className={"ourservices-headings-section"}>
            <h1>Our Services</h1>
            <img src={"/icons/hr.svg"} alt={"products plate 1 image"} className={"card-image-resize"}

            />

            </div>
        <div className={"our-services-cards-wrapper"}>

            <div className={"card"}>
                <img src={"/icons/transport.svg"} alt={"card header image"} className={"card-img-for-icons"}/>

                <div className={"card-header"}>
                    <div className={"card-title"}>

                        <h3>Free Home Delivery</h3>

                    </div>

                </div>

                <div className={"card-body"}>

                    <p>Free home delivery within 5km radius of our restaurant.</p>


                    <button className={"btn btn-secondary  view-more-products-button"}>Read More</button>


                </div>

            </div>
            <div className={"card active"}>
                <img src={"/icons/bag.svg"} alt={"card header image"}
                     className={"card-img-for-icons"}
                />

                <div className={"card-header"}>
                    <div className={"card-title"}>

                        <h3>Free Home Delivery</h3>

                    </div>

                </div>

                <div className={"card-body"}>

                    <p>Free home delivery within 5km radius of our restaurant.</p>


                    <button className={"btn btn-secondary  view-more-products-button"}>Read More</button>


                </div>

            </div>
            <div className={"card"}>
                <img src={"/icons/usd.svg"} alt={"card header image"}
                     className={"card-img-for-icons"}
                />
                <div className={"card-header"}>
                    <div className={"card-title"}>

                        <h3>Free Home Delivery</h3>

                    </div>

                </div>

                <div className={"card-body"}>

                    <p>Free home delivery within 5km radius of our restaurant.</p>


                    <button className={"btn btn-secondary  view-more-products-button"}>Read More</button>


                </div>

            </div>

        </div>

    </div>)
}


export default OurServices;