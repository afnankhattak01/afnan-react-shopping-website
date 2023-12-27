const Heroheader = () => {
    return (<div className="container">
        <div className={"hero-items flex align-center justify-between "}>

            <div>
                <div className={"hero-headings"}>
                    <h5>Welcome to</h5>
                    <img src={"./icons/logo.svg"} alt={"logo"}/>
                </div>
                <div className={"hero-text"}>
                    <h1>The Worlds Best <span className={"creative"}>Shopping </span> Website</h1>
                    <p>Savor culinary perfection on our website—where visuals meet seamless ordering for an
                        extraordinary
                        dining
                        experience.</p>

                    <div className={"flex-buttons flex "}>
                        <button className={"btn btn-primary"}>Read More</button>
                        <button className={"btn btn-secondary"}>Shop Now</button>

                    </div>
                </div>
            </div>
            <div className={"hero-section-right-image"}>
                <img className={"hero-img"} src={"./images/straw.png"} alt={"hero-img"}/>
            </div>
        </div>

    </div>)
}

export default Heroheader