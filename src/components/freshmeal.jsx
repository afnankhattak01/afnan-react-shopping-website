const FreshMeal = () => {
    return (<div className={"container"}>

        <div className={"fresh-meal-heading-section"}>
            <h1>Fresh Meals</h1>
            <img src={"/icons/hr.svg"} alt={"products plate 1 image"} className={"card-image-resize"}

            />

        </div>

        <div className={"fresh-meal-content-section flex align-center justify-center"}>

            <div className={"left"}>
                <img src={"/images/yogurt.png"}  alt={"fresh meal yogurt image"}/>
            </div>

            <div className={"right"}>

                <h2>
                    Discover culinary excellence in our fresh meal section – a delectable journey awaits.</h2>

                <p>
                    Dive into a culinary journey with our fresh meals—crafted with precision using the finest local
                    ingredients. From vibrant salads to succulent mains, savor the epitome of freshness delivered to
                    your door for a gourmet delight
                </p>
                <button className={"btn btn-secondary  view-more-products-button"}>View More</button>

            </div>

        </div>
    </div>);
}


export default FreshMeal;