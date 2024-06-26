import './Timeline.css'
import logo from '../../assets/osdhack24.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Timeline = () => {
    useEffect(() => {
        AOS.init({ offset: 140 });
    }, [])
    return (
        <>
            <div className="timelinesection grid-bg ba-grid anim">
                <div className="inner"></div>
                <div className="timeline-heading">&lt;timeline&gt;</div>
                <div className="timeline">
                    <div className="container left-container" data-aos='fade-in'>
                        {/* <img src={logo} alt="" /> */}
                        <div className="text-box" data-aos='fade-left'>
                            <h2>19th April 2024</h2>
                            <p>From 5PM onwards</p>
                            <p>opening ceremony (Attandance Mandatory) + Speaker Session</p>
                            <p>Auditorium</p>
                            <span className='left-container-arrow'></span>
                        </div>
                    </div>
                    <div className="container right-container">
                        {/* <img src={logo} alt="" /> */}
                        <div className="text-box" data-aos='fade-right'>
                            <h2>19th April 2024</h2>
                            <p>From 6PM onwards</p>
                            <p>Beginning of the Hackathon</p>
                            <p>online mode</p>
                            <span className='right-container-arrow'></span>
                        </div>
                    </div>
                    <div className="container left-container">
                        {/* <img src={logo} alt="" /> */}
                        <div className="text-box" data-aos='fade-left'>
                            <h2>19th April 2024</h2>
                            <p>6PM to 9PM</p>
                            <p>First Round of Evaluation</p>
                            <p>online mode</p>
                            <span className='left-container-arrow'></span>
                        </div>
                    </div>
                    <div className="container right-container">
                        {/* <img src={logo} alt="" /> */}
                        <div className="text-box" data-aos='fade-right'>
                            <h2>9PM onwards on 19th April - 1PM on 20th April</h2>
                            <p>Development of the Projects</p>
                            <p>online mode</p>
                            <span className='right-container-arrow'></span>
                        </div>
                    </div>
                    <div className="container left-container">
                        {/* <img src={logo} alt="" /> */}
                        <div className="text-box" data-aos='fade-left'>
                            <h2>20th April 2024</h2>
                            <p>1PM to 7PM</p>
                            <p>Development And Mid Evaluation</p>
                            <p>Auditorium</p>
                            <span className='left-container-arrow'></span>
                        </div>
                    </div>
                    <div className="container right-container">
                        {/* <img src={logo} alt="" /> */}
                        <div className="text-box" data-aos='fade-right'>
                            <h2>7PM onwards on 20th April - 9AM on 21th April</h2>
                            <p>Development of the Projects</p>
                            <p>online mode</p>
                            <span className='right-container-arrow'></span>
                        </div>
                    </div>
                    <div className="container left-container">
                        {/* <img src={logo} alt="" /> */}
                        <div className="text-box" data-aos='fade-left'>
                            <h2>21th April 2024</h2>
                            <p>9AM to 6PM</p>
                            <p>Development And Final Evaluation</p>
                            <p>Auditorium</p>
                            <span className='left-container-arrow'></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline;