const Navigation = () => {

    return (<div className={"container"}>
        <div className={"top-child-container flex aligm-items-center justify-between"}>
            <div className={"contactandemail flex align-center "}>
                <i className="bi bi-telephone-fill"></i>
                <div className={"info-div"}>
                    <h5>Call Us : (84) 2837657383</h5>
                    <h6 className={"semi-bold"}>E-mail : support@freshmeal.com</h6>
                </div>
            </div>
            <div className={"branding-image"}>
                <img src={"./icons/logo.svg"} alt={"logo"}/>

            </div>


            <div className={" info-div workinghourse flex align-center "}>
                <i className="bi bi-clock-fill"></i>
                <div>
                    <h5>Working Hours</h5>
                    <h6 className={"semi-bold"}>Mon - Fri 9am-6pm</h6>
                </div>
            </div>
        </div>


        <div className={"navbar-bottom magic-shadow"}>


            <ul className={"navbar-bottom-ul flex  flex-no-wrap justify-center"}>
                <li><a href="#" className={"active"}>Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>


        </div>


    </div>)
}

export default Navigation