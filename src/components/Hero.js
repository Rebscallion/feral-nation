// import linking from react-router
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <>
            <div id="hero">
                <div id="hero-text">
                    <h2>Support Us!</h2>
                    <p>Feral Nation is a non-profit cat rescue in Wellington. With a focus on caring for sick, injured and ferral cats and kittens. We rely solely on donations from people like you, so help support us and donate today!</p>
                    <Link to="/donate"><button id="donate-bttn">Donate</button></Link>
                </div>
            </div>
        </>
    )
}

export default Hero