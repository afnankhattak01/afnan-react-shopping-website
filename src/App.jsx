import Preheader from "./components/preheader.jsx";
import Navigation from "./components/nav.jsx";
import Heroheader from "./components/heroheader.jsx";
import Products from "./components/products.jsx";
import FreshMeal from "./components/freshmeal.jsx";
import OurServices from "./components/ourservices.jsx";
import WeeklyDeals from "./components/weekdeals.jsx";

function App() {

    return (<div className={"pagewrapper"}>
        <header className={"topbar"}>
            <Preheader/>

        </header>
        <nav className={"navigation"}>
            <Navigation/>
        </nav>
        <header className={"hero"}>

            <Heroheader/>

        </header>

        <section className={"topproducts"}>
            <Products/>
        </section>

        <section className={"freshmeals"}>
            <FreshMeal/>
        </section>

        <section className={"ourservices"}>
            <OurServices/>
        </section>

        <section className={"weeklydeals"}>
            <WeeklyDeals/>
        </section>


    </div>)
}

export default App
