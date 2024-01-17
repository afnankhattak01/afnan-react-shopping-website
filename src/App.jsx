import {BiMenuAltLeft} from "react-icons/bi";
import Preheader from "./components/preheader.jsx";
import Navigation from "./components/nav.jsx";
import Heroheader from "./components/heroheader.jsx";
import Products from "./components/products.jsx";
import FreshMeal from "./components/freshmeal.jsx";
import OurServices from "./components/ourservices.jsx";
import WeeklyDeals from "./components/weekdeals.jsx";
import Blogs from "./components/blogs.jsx";
import Newsletter from "./components/newsletter.jsx";
import Contactus from "./components/contactus.jsx";
import Social from "./components/social.jsx";
import Footer from "./components/footer.jsx";
import {useState} from "react";

function App() {
    const [sidebarState, setSidebarState] = useState("");

    console.log("sidebarState", sidebarState)


    const handleSidebarState = () => {
        console.log("handleSidebarState")
        if (sidebarState === "") {
            setSidebarState("active")
        } else {
            setSidebarState("")
        }
    }


    return (<>

        <div className={`sidebar ${sidebarState}`}>

            <div className={"sidebar-content"}>
                    <div className={"hero-headings"}>
                        <img src={"./icons/logo.svg"} alt={"logo"}/>
                    </div>


                <ul className={"sidebar-ul-item"}>
                    <li className={"sidebar-ul-item-li active"}><a href={"##"}>Home</a></li>
                    <li className={"sidebar-ul-item-li"}><a href={"##"}>About</a></li>
                    <li className={"sidebar-ul-item-li"}><a href={"##"}>Products</a></li>
                    <li className={"sidebar-ul-item-li"}><a href={"##"}>Fresh Meals</a></li>
                    <li className={"sidebar-ul-item-li"}><a href={"##"}>Our Services</a></li>
                    <li className={"sidebar-ul-item-li"}><a href={"##"}>Weekly Deals</a></li>
                    <li className={"sidebar-ul-item-li"}><a href={"##"}>Blogs</a></li>
                    <li className={"sidebar-ul-item-li"}><a href={"##"}>Contact Us</a></li>


                </ul>

            </div>

        </div>
        <div className={`pagewrapper ${sidebarState}`}>


            <div className={"nav-icon"}>
                <BiMenuAltLeft size={38} onClick={handleSidebarState}/>
            </div>

            <header className={"topbar"}>
                <Preheader/>

            </header>
            <nav className={"navigation"}>
                <Navigation/>
            </nav>
            <header className={"hero"}>

                <Heroheader/>

            </header>

            {/*<section className={"topproducts"}>*/}
            {/*    <Products/>*/}
            {/*</section>*/}

            <section className={"freshmeals"}>
                <FreshMeal/>
            </section>

            <section className={"ourservices"}>
                <OurServices/>
            </section>

            <section className={"weeklydeals"}>
                <WeeklyDeals/>
            </section>
            <section className={"blogs"}>
                <Blogs/>
            </section>


            <section className={"newsletter"}>
                <Newsletter/>
            </section>

            <section className={"contact-us-section-heading-class"}>
                <Contactus/>
            </section>

            <section className={"social-links-section"}>
                <Social/>
            </section>

            <footer className={"footer"}>
                <Footer/>
            </footer>
        </div>
    </>)
}

export default App
