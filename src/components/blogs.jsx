const Blogs = () => {


    return (<div className={"container"}>
        <div className={"our-blogs-heading-section"}>
            <h1>Latest News From Blog</h1>
            <img src={"/icons/hr.svg"} alt={"products plate 1 image"} className={"card-image-resize"}/>

        </div>

        <div className={"blogs-cards-wrapper "}>

            <div className={"card"}>

                <div className={"card-image"}>
                    <img src={"/images/donut-transparent.png"} alt={"products plate 1 image"}
                         className={"card-image-resize"}/>

                </div>

                <div className={"card-content"}>

                    <div className={"dates-postedby-comments-section"}>
                        <div>July 03, 2017</div>
                        <div>Posted By <strong className={"fresh-meal-post"}>FreshMeal</strong></div>
                        <div>12 Comments</div>


                    </div>

                    <h3>A donut is a very delicious food.Available everywhere!</h3>

                    <p>A doughnut or donut is a type of food made from leavened fried dough. It is popular in many
                        countries and is prepared in various forms.</p>


                </div>

            </div>
            <div className={"card"}>

                <div className={"card-image"}>
                    <img src={"/images/coffee.jpg"} alt={"products plate 1 image"}
                         className={"card-image-resize"}/>

                </div>

                <div className={"card-content"}>

                    <div className={"dates-postedby-comments-section"}>
                        <div>July 03, 2017</div>
                        <div>Posted By <strong>Fresh Meal</strong></div>
                        <div>12 Comments</div>


                    </div>

                    <h3>A donut is a very delicious food Available everywhere!</h3>

                    <p>A doughnut or donut is a type of food made from leavened fried dough. It is popular in many
                        countries and is prepared in various forms.</p>


                </div>

            </div>


        </div>
        <div className={"flex justify-center"}>
            <button className={"btn btn-secondary  view-more-products-button"}>View More</button>
        </div>
    </div>)
}

export default Blogs;