const ContactUs = () => {
    return (<div className={"contact-container"}>
        <div className={"left"}>
            <div className={"contact-heading-section"}>
                <h1>Contact Us</h1>
                <img src={"/icons/hr.svg"} alt={"products plate 1 image"} className={"card-image-resize"}/>

            </div>

            <div className={"contact-form-section"}>

                <div className={"flex align-center contact-div"}>
                    <img src={"/icons/phone-2.svg"}></img>
                    <div>
                        <h3>Call Us: </h3>
                        <h5 className={"semi-bold"}>(+72) 83737832712</h5>
                    </div>
                </div>
                <div className={"flex align-center contact-div"}>
                    <img src={"/icons/email.svg"}></img>
                    <div>
                        <h3>E-mail: </h3>
                        <h5 className={"semi-bold"}>support@freshmeal.com</h5>
                    </div>
                </div>
                <div className={"flex align-center contact-div"}>
                    <img src={"/icons/clock.svg"}></img>
                    <div>
                        <h3>Working Hours: </h3>
                        <h5 className={"semi-bold"}>Mon - Friday 9am - 10pm</h5>
                    </div>
                </div>

            </div>
        </div>

        <div className={"right"}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.88282399887!2d-118.74138523738681!3d34.02003923266773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1703926635597!5m2!1sen!2s"
                allowFullScreen="" loading="lazy"

                style={{border:0, width:"100%", height:"100%", minHeight:"500px"}}

                referrerPolicy="no-referrer-when-downgrade"

            ></iframe>

        </div>

    </div>)
}


export default ContactUs;