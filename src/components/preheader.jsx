const PreHeader = () => {

    return (<div className={"container flex justify-between align-center"}>


        <div className={"social-icons flex justify-between align-center "}>
            <a href={"##"}><i className="bi bi-facebook"></i></a>
            <a href={"https://twitter.com/"}><i className="bi bi-twitter"></i></a>
            <a href={"https://www.instagram.com/"}><i className={"bi bi-instagram"}></i></a>
            <a href={"https://www.youtube.com/"}><i className={"bi bi-youtube"}></i></a>
            <a href={"https://www.linkedin.com/"}><i className={"bi bi-linkedin"}></i></a>

        </div>
        <div className={"right-child-pre-header"}>

            <a href={"##"}><i className="bi bi-person-fill"></i>Log-in</a>
            <span className={"divider"}>|</span>
            <a href={"##"}><i className="bi bi-pencil-square"></i>Register Now</a>
            <span className={"divider"}>|</span>
            <a href={"##"}><i className="bi bi-cart-fill"></i>(0) Items - ($0.00)</a>


        </div>
    </div>)

}

export default PreHeader;