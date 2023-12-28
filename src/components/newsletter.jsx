const Newsletter = () => {
    return (
        <div className="container">

            <div className={"left"}>
                <img src={"/images/rasberry.png"} alt={"resberry image"} />
            </div>


            <div className={"right"}>
                <h2>Subscribe to our Newsletter</h2>
                <p>Sign up for our weekly industry updates, insider perspectives and in-depth market analysis.</p>
                <div className={"input"}>
                    <input type={"text"} placeholder={"Enter your email address"} />
                    <button className={"btn btn-primary"}>Subscribe</button>
                </div>

            </div>

        </div>
    )
}

export default Newsletter