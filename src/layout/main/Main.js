import "./Main.css"
import Cards from "../../components/cards/Cards";

const Main = () => {
    return (
        <main className="main">
            <section className="roboFriends-section">
                <div className="container">
                    <Cards/>
                </div>
            </section>
        </main>
    )
}

export default Main;