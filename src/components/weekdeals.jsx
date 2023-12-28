const WeeklyDeals = () => {
    return (<div className={"container"}>
        <div className={"weekly-deals-heading-section"}>
            <h1>Big Deals of the Week</h1>
            <img src={"/icons/hr.svg"} alt={"products plate 1 image"} className={"card-image-resize"}/>

        </div>

        <div className={"time-boxes-wrapper"}>
            <div>
                <h1>
                    02
                </h1>
                <span className={"muted"}>Days</span>
            </div>
            <div>
                <h1>
                    24
                </h1>
                <span className={"muted"}>hours</span>
            </div>
            <div>
                <h1>
                    55
                </h1>
                <span className={"muted"}>minutes</span>
            </div>
            <div>
                <h1>
                    58
                </h1>
                <span className={"muted"}>Seconds</span>
            </div>

        </div>


    </div>)


}

export default WeeklyDeals;