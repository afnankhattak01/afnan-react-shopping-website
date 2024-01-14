const Social = () => {

    return (<>
        <div className={"container"}>


            <div className={"social-link-wrapper"}>

                <div className={"social-links-flex-item about-div "}>


                    <h3 className={"social-links-heading"}>About</h3>

                    <hr className={"social-links-hr"}/>
                    <p className={"social-links-para"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque aliquet, eros non gravida efficitur, tortor ipsum scelerisque ante,
                        ac vehicula ante mauris sed lorem. </p>

                    <button className={"social-links-btn"}>Read More</button>

                </div>

                <div className={"social-links-flex-item quick-links"}>
                    <h3 className={"social-links-heading"}>Quick Links</h3>
                    <hr className={"social-links-hr"}/>

                    <ul className={"social-links-ul"}>
                        <li className={"social-links-li"}><a href={"#"} className={"social-links-a"}>Home</a></li>
                        <li className={"social-links-li"}><a href={"#"} className={"social-links-a"}>About</a></li>
                        <li className={"social-links-li"}><a href={"#"} className={"social-links-a"}>Services</a></li>
                        <li className={"social-links-li"}><a href={"#"} className={"social-links-a"}>Products</a></li>
                        <li className={"social-links-li"}><a href={"#"} className={"social-links-a"}>Contact</a></li>


                    </ul>

                </div>


                <div className={"social-links-flex-item  follow-us"}>
                    <h3 className={"social-links-heading"}>Follow Us</h3>
                    <hr className={"social-links-hr"}/>

                    <ul className={"social-links-ul"}>
                        <li className={"social-links-li"}>

                            <a href={"#"} className={"social-links-a"}>

                                <i
                                    className="bi bi-facebook"></i>


                                <span>
                            Facebook
                        </span>
                            </a>


                        </li>


                        <li className={"social-links-li"}><a href={"#"} className={"social-links-a"}>
                            <i
                                className="bi bi-twitter"></i>

                            <span>
                                Twitter
                            </span>
                        </a>
                        </li>
                        <li className={"social-links-li"}><a href={"#"} className={"social-links-a"}>
                            <i className="bi bi-instagram"></i>

                            <span>
                                Instagram
                            </span>
                        </a>


                        </li>
                        <li className={"social-links-li"}><a href={"#"} className={"social-links-a"}>
                            <i className="bi bi-linkedin"></i>
                            <span>
                                Linkedin
                            </span></a></li>
                        <li className={"social-links-li"}><a href={"#"} className={"social-links-a"}>
                            <i className="bi bi-youtube"></i>

                            <span>
                            Youtube
                        </span>
                        </a>

                        </li>


                    </ul>

                </div>


                <div className={"social-links-flex-item instagram-images-section"}>

                    <h3 className={"social-links-heading"}>Instagram</h3>
                    <hr className={"social-links-hr"}/>


                    <div className={"instagram-images-wrapper"}>

                        <div className={"instagram-images-flex-item"}>
                            <img src={"/images/food-table.jpg"} alt={"instagram-img"}/>
                        </div>

                        <div className={"instagram-images-flex-item"}>
                            <img src={"/images/jars.jpg"} alt={"instagram-img"}/>


                        </div>
                        <div className={"instagram-images-flex-item"}>
                            <img src={"/images/coffee.jpg"} alt={"instagram-img"}/>
                        </div>

                        <div className={"instagram-images-flex-item"}>
                            <img src={"/images/jars.jpg"} alt={"instagram-img"}/>
                        </div>
                        <div className={"instagram-images-flex-item"}>
                            <img src={"/images/coffee.jpg"} alt={"instagram-img"}/>
                        </div>
                        <div className={"instagram-images-flex-item"}>
                            <img src={"/images/food-table.jpg"} alt={"instagram-img"}/>
                        </div>

                    </div>


                </div>


            </div>


        </div>

    </>)
}

export default Social