import Preheader from "./components/preheader.jsx";
import Navigation from "./components/nav.jsx";
import Heroheader from "./components/heroheader.jsx";
import Products from "./components/products.jsx";

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
    </div>)
}

export default App
