import { Dot } from 'react-bootstrap-icons';

import applying from '../img/applying.svg';
import whoBring from '../img/who-to-bring.svg';
import adoptDay from '../img/adopt-day.svg';
import heroImage from '../img/aboutHero.svg';

const AboutAdopting = () => {
    return (
        <>
        <div id="about-hero"><img src={heroImage} alt="hero-img"></img></div>
            <div id="about-adoption">
                <div className="grid-item">
                    <h2>Applying to Adopt</h2>
                    <img src={applying} alt="applying-img"></img>
                    <ul>
                        <li><Dot />New kitties are listed every Wednesday at approximately 7pm.</li>
                        <li><Dot />Appointments are first come first served.</li>
                        <li><Dot />The kitties choose who takes them home, not the other way around.</li>
                    </ul>
                </div>
                <div className="grid-item">
                    <h2>Who to Bring</h2>
                    <img src={whoBring} alt="who-to-bring-img"></img>
                    <ul>
                        <li><Dot />Bring your whole household including flatmates and children!</li>
                        <li><Dot />We don’t recommend bringing along people who don’t live with you as it can impact whether the kittie chooses you.</li>
                    </ul>
                </div>
                <div className="grid-item">
                    <h2>Adoption Day</h2>
                    <img src={adoptDay} alt="adoption-day-img"></img>
                    <ul>
                        <li><Dot />Appointments are 30 minutes long.</li>
                        <li><Dot />Your family/group will be the only ones there so the kitties can get a sense of you.</li>
                        <li><Dot />If any kitty makes it clear they love you then your adoption will be approved.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AboutAdopting